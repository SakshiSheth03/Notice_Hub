from django.db import models

class Notice(models.Model):
    title = models.CharField(max_length=50)
    subject = models.CharField(max_length=255)
    description = models.TextField()
    datePosted = models.DateTimeField(auto_now_add=True)
    dateUpdated = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'notice'

