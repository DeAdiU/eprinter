# Generated by Django 4.2.7 on 2024-04-17 13:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('print', '0004_files_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='files',
            name='whatsapp',
        ),
    ]