from django.db import models

# Create your models here.
class User(models.Model):
  name = models.CharField(max_length=100)
  email = models.CharField(max_length=100, unique=True)
  password = models.CharField(max_length=255)
  created_at = models.DateTimeField(auto_now_add=True)

class Product(models.Model):
  name = models.CharField(max_length=100)
  image = models.CharField(max_length=255)
  description = models.CharField(max_length=100)
  price = models.FloatField()
  created_at = models.DateTimeField(auto_now_add=True)

class Purchase(models.Model):
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)

class Appointment(models.Model):
  appointment_type = models.CharField(max_length=20)
  fullname = models.CharField(max_length=50)
  cpf = models.CharField(max_length=20)
  pet_name = models.CharField(max_length=50)
  animal = models.CharField(max_length=30)
  animal_birthday = models.DateField()
  created_at = models.DateTimeField(auto_now_add=True)
