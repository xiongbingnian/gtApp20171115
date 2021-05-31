//我的学生录入实习信息页面跳转
mui(".myStudent_list").on("tap",".myStudentPage",function(){
	mui.openWindow({
		url:"myStudentPage.html",
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