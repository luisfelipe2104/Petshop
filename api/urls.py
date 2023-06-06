from django.urls import path
from . import views

urlpatterns = [
    path('create-user/', views.CreateUser.as_view(), name='create_user'),
    path('login/', views.Login.as_view(), name='login')
]