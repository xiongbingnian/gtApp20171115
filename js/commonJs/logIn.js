 /************登录***********/
//登录页退出APP
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
 document.getElementById("btn_logIn").addEventListener("tap",function(){
	 if($(".account").val()=="student"){
		 mui.openWindow({
			 url:"studentPage/index.html",
			 show: {
				 aniShow: 'slide-in-right',
				 duration: 300
			 },
			 waiting:{
				 autoShow:true,//自动显示等待框，默认为true
				 title:'正在加载...',//等待对话框上显示的提示内容
			 }
		 });
	 }else if($(".account").val()=="teacher"){
		 mui.openWindow({
			 url:"teacherPage/index.html",
			 show: {
				 aniShow: 'slide-in-right',
				 duration: 300
			 },
			 waiting:{
				 autoShow:true,//自动显示等待框，默认为true
				 title:'正在加载...',//等待对话框上显示的提示内容
			 }
		 });
	 }else{
		 return false;
	 }
 });
/************登录框下拉列表************/
 $(".school_box input").focus(function(){
  $(this).next(".school_list").show();
  }).blur(function(){
  $(".school_list").hide();
  });
mui(".school_list").on("tap","li",function(){
	$(this).parent().prev("input").val( $(this).html());
//  $(".school_box input").val( $(this).html());
    $(".school_list").hide();
});
mui(".school_list").on("tap","li",function(){
	$(this).parent().prev("input").val( $(this).html());
    $(".school_list").hide();
});
