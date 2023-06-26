from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status

from .models import User, Product, Purchase, Appointment
from .serializers import UserSerializer, ProductSerializer, PurchaseSerializer, AppointmentSerializer

# Create your views here.
class CreateUser(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            cpf = serializer.data.get('cpf')

            userExists = User.objects.filter(email=email).exists()
            if not userExists:
                user = User.objects.create(name=name, email=email, password=password, cpf=cpf)
                user.save()
                return Response({ 'msg': 'User created!' }, status=status.HTTP_201_CREATED)
            else:
                return Response({ 'msg': 'Email is being used!' }, status=status.HTTP_409_CONFLICT)
        else:
            return Response({ 'msg': serializer.errors }, status=status.HTTP_400_BAD_REQUEST)

class Login(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        userExists = User.objects.filter(email=email, password=password)
        if userExists.exists():
            serializer = UserSerializer(userExists, many=True)
            data = serializer.data
            return Response({ 'msg': 'user logged in!', 'user': data }, status=status.HTTP_200_OK)
        else:
            return Response({ 'msg': 'invalid credentials!' }, status=status.HTTP_400_BAD_REQUEST)

class ScheduleAppointments(APIView):
    def post(self, request):
        serializer = AppointmentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({ 'msg': 'appointment scheduled!' }, status=status.HTTP_201_CREATED)
        
        else:
            return Response({ 'msg': serializer.errors }, status=status.HTTP_400_BAD_REQUEST)
    
class GetAppointments(APIView):
    def get(self, request, user_id):
        appointments = Appointment.objects.filter(user_id=user_id)
        serializer = AppointmentSerializer(appointments, many=True)
        data = serializer.data
        return Response(data, status=status.HTTP_200_OK)

class GetAppointment(APIView):
    def get(self, request, pk):
        appointments = Appointment.objects.filter(id=pk)
        serializer = AppointmentSerializer(appointments, many=True)
        data = serializer.data
        return Response(data, status=status.HTTP_200_OK)

class CancelAppointment(APIView):
    def delete(self, request, pk):
        appointment = Appointment.objects.get(id=pk)
        appointment.delete()
        return Response({ 'msg': 'appointment deleted!' }, status=status.HTTP_200_OK)

class UpdateAppointment(APIView):
    def put(self, request, pk):
        appointment = Appointment.objects.get(id=pk)
        serializer = AppointmentSerializer(instance=appointment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({ 'msg': 'appointment updated!' })

        else:
            return Response({ 'msg': serializer.errors }, status=status.HTTP_400_BAD_REQUEST)
