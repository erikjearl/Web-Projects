# Generated by Django 4.1.7 on 2023-02-19 20:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Todo',
            new_name='Location',
        ),
    ]
