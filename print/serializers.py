from rest_framework import serializers

from .models import Files
import PyPDF2 
ratesofprint={'Single':1.5,'Double':2,'Color':5,'Black and White':1,}
class FileSerializer(serializers.ModelSerializer):
    price=serializers.SerializerMethodField()
    token=serializers.SerializerMethodField()
    class Meta:
        model=Files
        fields=['id','token','pdf','Name','category','regNo','Layout','PaperSize','color','PagesPerSheet','printSide','Pages','numberOfCopies','price']

    def get_price(self,obj):
        file = open(obj.pdf.path, 'rb') 
        pdfReader = PyPDF2.PdfReader(file) 
        totalPages = len(pdfReader.pages)
        sam=0
        print(f"Total Pages: {totalPages}") 
        if obj.printSide=="Single":
            sam=(totalPages)/(1*obj.PagesPerSheet)*ratesofprint[obj.color]*1.5
        elif obj.printSide=="Double":
            sam=(totalPages)/(1*obj.PagesPerSheet)*ratesofprint[obj.color]*2
        return sam*obj.numberOfCopies

    def get_token(self,obj):
        token=""
        if obj.category=="Student":
            token=token+"S"
        elif obj.category=="Professor":
            token=token+"P"
        elif obj.category=="Staff":
            token=token+"S"
        token=token+obj.regNo+'#'+str(obj.id)
        return token
        
            