# Generated by Django 4.1.7 on 2023-02-22 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='excerpt',
            new_name='brand',
        ),
        migrations.AddField(
            model_name='post',
            name='price',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='weight',
            field=models.TextField(null=True),
        ),
    ]
