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
	    },
		extras:{
	        noticeId: $(this).data('id')
    	}
	});
});
//学生签到页面跳转
document.getElementById("signInStudent").addEventListener("tap",function(){
	mui.openWindow({
		url:"signInStudent.html",
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
//学生日报页面跳转
document.getElementById("studentDaily").addEventListener("tap",function(){
	mui.openWindow({
		url:"studentDaily.html",
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
//学生周报页面跳转
document.getElementById("studentWeekly").addEventListener("tap",function(){
	mui.openWindow({
		url:"studentWeekly.html",
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
//学生月报页面跳转
document.getElementById("studentMonthly").addEventListener("tap",function(){
	mui.openWindow({
		url:"studentMonthly.html",
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
//指导记录页面跳转
document.getElementById("guideRecord").addEventListener("tap",function(){
	mui.openWindow({
		url:"guideRecord.html",
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
//我的学生页面跳转
document.getElementById("myStudent").addEventListener("tap",function(){
	mui.openWindow({
		url:"myStudent.html",
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
//学生留言页面跳转
document.getElementById("studentMessage").addEventListener("tap",function(){
	mui.openWindow({
		url:"studentMessage.html",
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
