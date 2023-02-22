from rest_framework import serializers
from product.models import Post,User


class PostSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(many=False, read_only=True)
    author = serializers.StringRelatedField(many=False, read_only=True)
    #category = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        fields = ('id', 'title','slug', 'author', 'brand','price','weight', 'content', 'status','category')
        model = Post


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('username', 'password','email')
        model = User