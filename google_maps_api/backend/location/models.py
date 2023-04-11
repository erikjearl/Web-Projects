from django.db import models

# Create your models here.
class Location(models.Model):
    name = models.CharField(max_length=120)
    latitude = models.CharField(max_length=64)
    longitude = models.CharField(max_length=64)
    rating = models.DecimalField(max_digits=2,decimal_places=1)
    price_level = models.CharField(max_length=12)
    type = models.CharField(max_length=12)

    def __str__(self):
        return self.name