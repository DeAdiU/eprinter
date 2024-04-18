from django.urls import path,include
from .views import (
    categorySearch,FilesViewSets,ProfessorListView,StudentListView,UpdateView
)

from .views import get_file_detail

from rest_framework.routers import DefaultRouter
router=DefaultRouter()
router.register('files',FilesViewSets,basename='files')


urlpatterns = [
    path('', categorySearch.as_view()),
    path('post/', include(router.urls)),
    path('student/', StudentListView.as_view(), name='student-list'),
    path('professor/', ProfessorListView.as_view(), name='user-post-list'),
    path('update-status/<int:pk>/', UpdateView.as_view(), name='update-status'),
    path('get-details/<int:pk>/',get_file_detail, name='get-details'),
]