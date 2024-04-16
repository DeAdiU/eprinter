from rest_framework import generics, filters, viewsets,status,serializers
from .models import Files
from .serializers import FileSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
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
    
    

@api_view(['PUT'])
def update_status(request, pk):
    """
    Update the `status` field of a File instance.
    """
    try:
        file = Files.objects.get(pk=pk)
    except Files.DoesNotExist:
        return Response({'error': 'File does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if 'pdf' not in request.data or request.data['pdf'] is None:
            return Response({'pdf': ['No file was submitted.']}, status=status.HTTP_400_BAD_REQUEST)
        
    serializer = FileSerializer(file, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

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


# React integration
# 
# to get a file's details, make a GET request to /api/files/{pk}/detail/
# replace {pk} with the id of the File instance you want to retrieve
# 
# the server will respond with the File instance's details, or an error message if the request was not valid.
# 
# to use this with React, you can make a GET request to this endpoint and handle the response as you see fit.
# for example:
# 
# const getFileDetail = async (id) => {
#   try {
#     const response = await fetch(`/api/files/${id}/detail/`);
# 
#     if (response.ok) {
#       const fileDetail = await response.json();
#       console.log(fileDetail);
#     } else {
#       console.error(`Error retrieving file detail: ${response.status}`);
#     }
#   } catch (error) {
#     console.error(`Error retrieving file detail: ${error}`);
#   }
# };
# 
# you can call this function with the id of the File instance you want to retrieve, and it will send a GET request to the server and log the File instance's details if the request was successful, or an error message if the request was not.
# React integration
# 
# to update the status, make a PUT request to /api/files/{pk}/status/
# replace {pk} with the id of the File instance you want to update
# in the request body, include a JSON object with a 'status' field
# for example:
# {
#   "status": "in_print"
# }
# 
# the server will respond with the updated File instance, or an error message if the request was not valid.
# 
# to use this with React, you can make a PUT request to this endpoint and handle the response as you see fit.
# for example:
# 
# const updateFileStatus = async (id, status) => {
#   try {
#     const response = await fetch(`/api/files/${id}/status/`, {
#       method: 'PUT',
#       headers: {
#         'Content-Type': 'application/json',
#       },
#       body: JSON.stringify({ status }),
#     });
# 
#     if (response.ok) {
#       const updatedFile = await response.json();
#       console.log(updatedFile);
#     } else {
#       console.error(`Error updating file status: ${response.status}`);
#     }
#   } catch (error) {
#     console.error(`Error updating file status: ${error}`);
#   }
# };
# 
# you can call this function with the id and new status of the File instance you want to update, and it will send a PUT request to the server and log the updated File instance if the request was successful, or an error message if the request was not.
# 
# Note: you may need to install the 'fetch' API to use this code, as it is not available in all browsers.
# you can add it to your project using a polyfill like 'isomorphic-fetch' or 'unfetch'
