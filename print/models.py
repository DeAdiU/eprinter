from django.db import models
from django.core.validators import RegexValidator

# Create your models here.

class Files(models.Model):
    pdf=models.FileField(upload_to='store/pdfs/')
    regNo=models.CharField(max_length=100,default="I19" ,validators=[RegexValidator(regex='[0-9a-zA-Z]', message='Only Alphanumeric is allowed.',code='invalid Registration Number' ) ] )
    Name=models.CharField(max_length=100,default="UnknownPrint")
    category=models.CharField(max_length=10,default="Student")
    PaperSize=models.CharField(max_length=150,default="A4")
    color=models.CharField(max_length=155,default="Black and White")
    PagesPerSheet=models.IntegerField(default=1)
    printSide=models.CharField(max_length=155,default='Single')
    Layout=models.CharField(max_length=150,default="Potrait")
    Pages=models.CharField(max_length=150,default="All")
    numberOfCopies=models.IntegerField(default=1)
    Layout=models.CharField(max_length=150,default="Potrait")

    
    def __str__(self):
        return self.pdf