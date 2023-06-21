from django.urls import path
from . import views

urlpatterns = [
    path('create-user/', views.CreateUser.as_view(), name='create_user'),
    path('login/', views.Login.as_view(), name='login'),
    path('schedule-appointments/', views.ScheduleAppointments.as_view(), name='schedule appointments'),
    path('get-appointments/<str:user_id>', views.GetAppointments.as_view(), name='get_appointments'),
]