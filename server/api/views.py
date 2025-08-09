from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework import serializers
from rest_framework.parsers import JSONParser
from .models import Inquiry
import json
import logging

logger = logging.getLogger(__name__)


# Inquiry Serializer
class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = (
            'id', 'first_name', 'last_name', 'email', 'phone', 'service',
            'audience_type', 'message', 'created_at'
        )
        read_only_fields = ('id', 'created_at')


@csrf_exempt
@require_http_methods(["POST", "OPTIONS"])
def create_inquiry(request):
    """
    Create a new inquiry - completely bypasses CSRF protection
    """
    # Handle preflight OPTIONS request for CORS
    if request.method == "OPTIONS":
        response = JsonResponse({})
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Content-Type, X-Requested-With"
        return response
    
    try:
        # Log request details
        logger.info(f"Received POST request from {request.META.get('REMOTE_ADDR')}")
        logger.info(f"Content-Type: {request.content_type}")
        
        # Parse JSON data
        if request.content_type == 'application/json':
            data = json.loads(request.body.decode('utf-8'))
        else:
            data = request.POST.dict()
        
        logger.info(f"Request data: {data}")
        
        # Validate and save using serializer
        serializer = InquirySerializer(data=data)
        if serializer.is_valid():
            inquiry = serializer.save()
            logger.info(f"Inquiry created successfully with ID: {inquiry.id}")
            
            response = JsonResponse({
                'message': 'Inquiry submitted successfully',
                'id': inquiry.id
            }, status=201)
            
            # Add CORS headers
            response["Access-Control-Allow-Origin"] = "*"
            response["Access-Control-Allow-Methods"] = "POST, OPTIONS"
            response["Access-Control-Allow-Headers"] = "Content-Type"
            
            return response
        else:
            logger.error(f"Validation errors: {serializer.errors}")
            response = JsonResponse({
                'errors': serializer.errors
            }, status=400)
            response["Access-Control-Allow-Origin"] = "*"
            return response
            
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error: {e}")
        response = JsonResponse({
            'error': 'Invalid JSON data'
        }, status=400)
        response["Access-Control-Allow-Origin"] = "*"
        return response
        
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        response = JsonResponse({
            'error': 'An error occurred while processing your request'
        }, status=500)
        response["Access-Control-Allow-Origin"] = "*"
        return response