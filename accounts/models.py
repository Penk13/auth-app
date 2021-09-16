from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None, is_active=True, is_staff=False, is_superuser=False):  # , **extra_fields
        if not email:
            raise ValueError('Users must have an email address')

        if not password:
            raise ValueError('Users must have a password')

        # Normalize example: Test@gmail.com ---> test@gmail.com
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)  # , **extra_fields
        user.is_staff = is_staff
        user.is_superuser = is_superuser

        user.set_password(password)
        user.save()

        return user

    # Called when we run python manage.py createsuperuser
    def create_superuser(self, name, email, password=None):
        user = self.create_user(email, name, password,
                                is_staff=True, is_superuser=True)
        return user


# Abstract Base User will give three fields by default (id, password, last_login)
class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    # first_name = models.CharField(max_length=255)
    # last_name = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    # USERNAME_FIELD and password are required to login
    USERNAME_FIELD = 'email'
    # REQUIRED_FIELD is a list of the field names that will be prompted
    # for when creating a user via the createsuperuser management command
    REQUIRED_FIELDS = ['name']  # first_name, last_name

    def get_full_name(self):
        return self.name  # first_name

    def get_short_name(self):
        return self.name  # first_name

    def __str__(self):
        return self.email
