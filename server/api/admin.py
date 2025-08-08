from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Inquiry


@admin.register(Inquiry)
class InquiryAdmin(ModelAdmin):
    list_display = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'service',
        'audience_type',
        'created_at',
    ]
    list_filter = ['audience_type', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'phone', 'service', 'message']
