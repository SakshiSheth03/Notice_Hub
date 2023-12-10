from django.shortcuts import render
from django.http import HttpResponse
from myadmin.models import Notice

def all_notices(request):
	allnotices = Notice.objects.all().order_by('dateUpdated').reverse()
	context = {'result':allnotices}
	return render(request,'user/notice.html',context)

