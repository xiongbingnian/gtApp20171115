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
		for (var i = $(".center_table tr").length, len = i + 3; i < len; i++) {
			var tr_html='<tr>'+
				'<td>3-20</td>'+
				'<td class="color_5A5858">' + (i + 1) + '</td>'+
				'<td>20</td>'+
				'<td class="color_5A5858">0</td>'+
				'<td>10</td>'+
				'<td><a class="studentDailyPage"><img src="../img/i_allSubtitle.png" alt=""></a></td>'+
			'</tr>'
			$(".center_table").append(tr_html);
		}
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2));
	}, 1500);
}
//菜单栏选择
$(".menu_list li").on("tap",function(){
	$(".menu_list li").removeClass("class_active");
	$(this).addClass("class_active");
});
//学生日报（班级）页面跳转
mui(".center_table").on("tap",".studentDailyPage",function(){
	mui.openWindow({
		url:"studentDailyPage.html",
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