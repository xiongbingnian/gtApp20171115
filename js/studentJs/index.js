//首页退出APP
mui.plusReady(function() {
	if ('Android' == plus.os.name) {
	    var first = null;
	    mui.back = function() {
	        if (!first) {
	            first = new Date().getTime();
	            mui.toast('再按一次退出应用');
	            setTimeout(function() {
	                first = null;
	            }, 1000);
	        } else {
	            if (new Date().getTime() - first < 1000) {
					plus.runtime.quit();
	            }
	       }
	    }
	}
});
//我的问题页面跳转
document.getElementById("myQuery").addEventListener("tap",function(){
	mui.openWindow({
		url:"myQuery.html",
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
//通知公告页面跳转
mui(".module_box").on("tap",".inform",function(){
	mui.openWindow({
		url:"inform.html",
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
//签到页面跳转
document.getElementById("signIn").addEventListener("tap",function(){
	mui.openWindow({
		url:"signIn.html",
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
//日报页面跳转
document.getElementById("daily").addEventListener("tap",function(){
	mui.openWindow({
		url:"daily.html",
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
//周报页面跳转
document.getElementById("weekly").addEventListener("tap",function(){
	mui.openWindow({
		url:"weekly.html",
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
//月报页面跳转
document.getElementById("monthly").addEventListener("tap",function(){
	mui.openWindow({
		url:"monthly.html",
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
//实习招聘页面跳转
document.getElementById("recruit").addEventListener("tap",function(){
	mui.openWindow({
		url:"recruit.html",
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
//实习信息页面跳转
document.getElementById("info").addEventListener("tap",function(){
	mui.openWindow({
		url:"info.html",
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
//实习鉴定表页面跳转
document.getElementById("decisionTable").addEventListener("tap",function(){
	mui.openWindow({
		url:"decisionTable.html",
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
//我的评价表页面跳转
document.getElementById("myRating").addEventListener("tap",function(){
	mui.openWindow({
		url:"myRating.html",
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
//留言板表页面跳转
document.getElementById("myMessage").addEventListener("tap",function(){
	mui.openWindow({
		url:"myMessage.html",
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
//登录页面跳转
document.getElementById("logIn").addEventListener("tap",function(){
	mui.openWindow({
		url:"../logIn.html",
		show: {
			aniShow: 'slide-in-right',
			duration: 100
		},
		waiting:{
	      autoShow:true,//自动显示等待框，默认为true
	      title:'正在加载...',//等待对话框上显示的提示内容
	    }
	});
	$(".exit_popup").hide();
});