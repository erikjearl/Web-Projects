# Generated by Django 4.1.7 on 2023-02-19 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0002_rename_todo_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='rating',
            field=models.DecimalField(decimal_places=1, max_digits=2),
        ),
    ]