from django.contrib import admin
from .models import Todo

class TodoAdmin(admin.ModelAdmin):
  list_display = ('descripcion', 'isCompleted')

# Register your models here.

admin.site.register(Todo, TodoAdmin)


