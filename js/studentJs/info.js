//新增实习信息页面跳转
mui(".info_subtitle").on("tap",".enteringInfo",function(){
	mui.openWindow({
		url:"enteringInfo.html",
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
//编辑实习信息页面跳转
mui(".newInfo_list").on("tap",".enteringInfo",function(){
	mui.openWindow({
		url:"enteringInfo.html",
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
