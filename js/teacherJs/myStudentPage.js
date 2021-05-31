mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});
/**
 * 上拉加载具体业务实现
 */
var count = 0;
function pullupRefresh() {
	$(".text_more").hide();
	setTimeout(function() {

		mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2));
	}, 1500);
}
//菜单栏选择
$(".menu_list li").on("tap",function(){
	$(".menu_list li").removeClass("class_active");
	$(this).addClass("class_active");
});
//学生实习信息页面跳转
mui(".myStudent_table").on("tap",".myStudentPage_1",function(){
	mui.openWindow({
		url:"myStudentPage_1.html",
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
//学生实习信息录入页面跳转
mui(".myStudent_table").on("tap",".myStudentPage_2",function(){
	mui.openWindow({
		url:"myStudentPage_2.html",
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