# Generated by Django 4.2.7 on 2024-04-18 04:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('print', '0010_files_price_files_token'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='files',
            name='price',
        ),
        migrations.RemoveField(
            model_name='files',
            name='token',
        ),
    ]
