# Generated by Django 4.1.7 on 2023-02-21 00:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0003_alter_location_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='type',
            field=models.CharField(default='Restaurant', max_length=12),
            preserve_default=False,
        ),
    ]