# Generated by Django 4.2.7 on 2024-04-09 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('print', '0002_files_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='files',
            name='pdf',
            field=models.FileField(upload_to='pdfs/'),
        ),
    ]