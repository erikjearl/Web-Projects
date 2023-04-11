from django.contrib import admin
from .models import Location

# Register your models here.

class LocationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'latitude', 'longitude', 'rating', 'price_level', 'type')

admin.site.register(Location, LocationAdmin)