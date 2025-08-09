from django.urls import path
from . import views

app_name = 'api'

urlpatterns = [
    path('inquiries/', views.create_inquiry, name='create_inquiry'),
    path('inquiry/', views.create_inquiry, name='create_inquiry_singular'),
    path('enquiry/', views.create_inquiry, name='create_enquiry'),
    path('enquiry', views.create_inquiry, name='create_enquiry_no_slash'),
]