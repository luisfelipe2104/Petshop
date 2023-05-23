from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.contrib.auth.decorators import login_required

#  python3 manage.py collectstatic

# Create your views here.
@login_required(login_url='login')
def Index(request):
    user_object = User.objects.get(email=request.user.email)
    print(user_object)
    return render(request, 'index.html')

def Home(request):
    return render(request, 'home.html')

def Login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        print(username, password)

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('index')

        else:
            messages.info(request, 'Credentials Invalid')
            return redirect('login')
    else:
        return render(request, 'login.html')

def Register(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        if not username or not password or not email:
            messages.info(request, "data can't be empty!")

        elif User.objects.filter(email=email).exists():
            messages.info(request, 'email taken!')

        elif User.objects.filter(username=username).exists():
            messages.info(request, 'username taken!')

        else:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()

            user_login = auth.authenticate(username=username, email=email, password=password)
            auth.login(request, user_login)
            return redirect('index')

    return render(request, 'register.html')

@login_required(login_url='index')
def Logout(request):
    auth.logout(request)
    return redirect('index')