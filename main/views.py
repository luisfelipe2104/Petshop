from django.shortcuts import render, redirect

#  python3 manage.py collectstatic

# Create your views here.
def Home(request):
    return render(request, 'home.html')

def Login(request):
    return render(request, 'login.html')

def Register(request):
    return render(request, 'register.html')

