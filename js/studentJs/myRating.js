//评价校内老师页面跳转
document.getElementById("internalTeacherRatingPage").addEventListener("tap",function(){
	mui.openWindow({
		url:"internalTeacherRatingPage.html",
		show: {
			aniShow: 'slide-in-right',
			duration: 300
		},
		waiting:{
	      autoShow:true,//自动显示等待框，默认为true
	      title:'正在加载...',//等待对话框上显示的提示内容
	    }
	});
});
//评价校外老师页面跳转
document.getElementById("externalTeacherRatingPage").addEventListener("tap",function(){
	mui.openWindow({
		url:"externalTeacherRatingPage.html",
		show: {
			aniShow: 'slide-in-right',
			duration: 300
		},
		waiting:{
	      autoShow:true,//自动显示等待框，默认为true
	      title:'正在加载...',//等待对话框上显示的提示内容
	    }
	});
});
//评价实习企业页面跳转
document.getElementById("companyRatingPage").addEventListener("tap",function(){
	mui.openWindow({
		url:"companyRatingPage.html",
		show: {
			aniShow: 'slide-in-right',
			duration: 300
		},
		waiting:{
	      autoShow:true,//自动显示等待框，默认为true
	      title:'正在加载...',//等待对话框上显示的提示内容
	    }
	});
});