from django.contrib import admin
from .models import User, Product, Purchase, Appointment

# python3 manage.py createsuperuser

# Register your models here.
admin.site.register(User)
admin.site.register(Product)
admin.site.register(Appointment)
admin.site.register(Purchase)