from rest_framework import status, serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from .models import Inquiry

# Create your views here.


# All auth-related views removed


# Inquiry Serializer and API
class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = (
            'id', 'first_name', 'last_name', 'email', 'phone', 'service',
            'audience_type', 'message', 'created_at'
        )
        read_only_fields = ('id', 'created_at')


@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def create_inquiry(request):
    serializer = InquirySerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response({'message': 'Inquiry submitted successfully'}, status=status.HTTP_201_CREATED)
