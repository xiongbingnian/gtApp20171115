//问题反馈页面跳转
document.getElementById("newAddQuery").addEventListener("tap",function(){
	mui.openWindow({
		url:"newAddQuery.html",
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