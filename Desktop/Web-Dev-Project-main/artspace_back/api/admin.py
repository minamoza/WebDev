from django.contrib import admin

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from api.models import MyUser


class MyUserInline(admin.StackedInline):
    model = MyUser
    can_delete = False
    verbose_name_plural = 'MyUsers'

class UserAdmin(BaseUserAdmin): 
    inlines = (MyUserInline, )

admin.site.unregister(User)
admin.site.register(User, UserAdmin)

