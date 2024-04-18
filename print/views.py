from rest_framework import generics, filters, viewsets,status,serializers
from .models import Files
from .serializers import FileSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
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


class FileStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Files
        fields = ('status',)
        extra_kwargs = {'status': {'required': True}}

    def update(self, instance, validated_data):
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance
    
class UpdateView(APIView):
  def get_object(self, pk):
    try:
      return Files.objects.get(pk=pk)
    except Files.DoesNotExist:
      return None

  def put(self, request, pk):
    instance = self.get_object(pk)
    if not instance:
      return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = FileSerializer(instance, data=request.data, partial=True)
    if serializer.is_valid():
      serializer.save()
      return Response("Status updated successfully", status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_file_detail(request, pk):
    """
    Retrieve a File instance by its ID and return its details.
    """
    try:
        file = Files.objects.get(pk=pk)
    except Files.DoesNotExist:
        return Response({'error': 'File does not exist'}, status=status.HTTP_404_NOT_FOUND)

    serializer = FileSerializer(file)
    return Response(serializer.data)


