from rest_framework import generics, filters, viewsets
from .models import Files
from .serializers import FileSerializer

class categorySearch(generics.ListAPIView):
    queryset = Files.objects.all()
    serializer_class = FileSerializer

class StudentListView(generics.ListAPIView):
    serializer_class = FileSerializer

    def get_queryset(self):
        return Files.objects.filter(category="Student")

class ProfessorListView(generics.ListAPIView):
    serializer_class = FileSerializer

    def get_queryset(self):
        return Files.objects.filter(category="Professor")
    
class FilesViewSets(viewsets.ModelViewSet):
    queryset=Files.objects.all()
    serializer_class=FileSerializer
    