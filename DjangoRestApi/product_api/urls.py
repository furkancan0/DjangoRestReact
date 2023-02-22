from .views import CreateUser ,PostList, PostDetail, PostListDetailfilter,CreatePost,AdminPostDetail,EditPost,DeletePost
from django.urls import path

app_name = 'product_api'


urlpatterns = [
    # Post Urls
    path('post/<str:pk>/', PostDetail.as_view(), name='detailcreate'),
    path('search/', PostListDetailfilter.as_view(), name='postsearch'),
    path('', PostList.as_view(), name='listcreate'),
    # User Urls
    path('create/user/', CreateUser.as_view(), name='usercreate'),
    # Post Admin URLs
    path('admin/create/', CreatePost.as_view(), name='createpost'),
    path('admin/edit/postdetail/<int:pk>/', AdminPostDetail.as_view(), name='admindetailpost'),
    path('admin/edit/<int:pk>/', EditPost.as_view(), name='editpost'),
    path('admin/delete/<int:pk>/', DeletePost.as_view(), name='deletepost'),
]