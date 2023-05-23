from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home, name='home'),
    path('index', views.Index, name='index'),
    path('login', views.Login, name='login'),
    path('logout', views.Logout, name='logout'),
    path('register', views.Register, name='register'),
]