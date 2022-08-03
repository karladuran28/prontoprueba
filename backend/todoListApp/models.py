from django.db import models

# Create your models here.

class Todo(models.Model):
  descripcion = models.TextField()
  isCompleted = models.BooleanField(default=False)

  def __str__(self):
    return self.descripcion
