from django.shortcuts import render, redirect

#  python3 manage.py collectstatic

# Create your views here.
def Home(request):
    return render(request, 'home.html')