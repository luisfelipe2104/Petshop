from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status

from .models import User, Product, Purchase, Appointment
from .serializers import UserSerializer, LoginSerializer, ProductSerializer, PurchaseSerializer, AppointmentSerializer

# Create your views here.
class CreateUser(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            email = serializer.data.get('email')
            password = serializer.data.get('password')

            user = User.objects.create(name=name, email=email, password=password)
            user.save()
            return Response({ 'success': 'User created!' }, status=status.HTTP_201_CREATED)

        else:
            return Response({ 'bad_request': "Can't add empty data!" }, status=status.HTTP_204_NO_CONTENT)

class Login(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        userExists = User.objects.filter(email=email, password=password).exists()

        if userExists:
            return Response({ 'success': 'user logged in!' }, status=status.HTTP_201_CREATED)
        
        else:
            return Response({ 'success': email }, status=status.HTTP_201_CREATED)
