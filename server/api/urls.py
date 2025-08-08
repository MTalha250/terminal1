from django.urls import path
from . import views

app_name = 'api'

urlpatterns = [
    path('inquiries/', views.create_inquiry, name='create_inquiry'),
] 