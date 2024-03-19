from django.urls import path,include
from .views import (
    categorySearch,FilesViewSets,ProfessorListView,StudentListView
)
from rest_framework.routers import DefaultRouter
router=DefaultRouter()
router.register('files',FilesViewSets,basename='files')

urlpatterns = [
    path('', categorySearch.as_view()),
    path('post/', include(router.urls)),
    path('student/', StudentListView.as_view(), name='student-list'),
    path('professor/', ProfessorListView.as_view(), name='user-post-list'),
]