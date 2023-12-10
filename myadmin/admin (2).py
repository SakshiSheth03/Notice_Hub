from django.contrib import admin
from myadmin.models import Notice

admin.site.site_header='Notice Hub'
admin.site.index_title='Admin Panel'

class NoticeAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'subject', 'description', 'datePosted', 'dateUpdated']
    search_fields=['title','subject']
    
admin.site.register(Notice, NoticeAdmin)