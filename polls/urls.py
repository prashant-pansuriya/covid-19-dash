from django.contrib import admin
from django.urls import path
from .views import home
from django.views.generic import TemplateView

urlpatterns = [
   path('home/', home, name = "Home"),
]
