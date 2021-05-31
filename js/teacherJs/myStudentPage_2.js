//实习、参军、升学、未实习选择
mui(".practiceWay_list").on("tap","li",function(){
	$(".practiceWay_list li").removeClass("class_active");
	$(this).addClass("class_active");
});
mui(".practiceWay_list").on("tap",".practice_li",function(){
	$(".practice_box").show();
	$(".no_practice_box").hide();
});
mui(".practiceWay_list").on("tap",".joinUp_li",function(){
	$(".practice_box").hide();
	$(".no_practice_box").hide();
});
mui(".practiceWay_list").on("tap",".goUp_li",function(){
	$(".practice_box").hide();
	$(".no_practice_box").hide();
});
mui(".practiceWay_list").on("tap",".noPractice_li",function(){
	$(".practice_box").hide();
	$(".no_practice_box").show();
});
//我的学生
$(".student_choice span").on("tap",function(){
    if($(this).hasClass("student_active")){
        $(this).removeClass("student_active")
    }else{
        $(this).addClass("student_active")
    }
})
//录入实习单位页面跳转
mui(".info_list").on("tap",".enteringCompanyInfo",function(){
	mui.openWindow({
		url:"enteringCompanyInfo.html",
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
//录入校外教师页面跳转
mui(".info_list").on("tap",".enteringExternalTeacherInfo",function(){
	mui.openWindow({
		url:"enteringExternalTeacherInfo.html",
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
//弹窗录入实习单位页面跳转
mui(".popup_section").on("tap",".enteringCompanyInfo",function(){
	mui.openWindow({
		url:"enteringCompanyInfo.html",
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


//日期选择
$(".practice_data").on("tap",function(){
	var self=this;
	var dtpicker = new mui.DtPicker({
	    type: "date",//设置日历初始视图模式 
	    beginDate: new Date(2010, 01, 01),//设置开始日期 
	    endDate: new Date(2027, 01, 01),//设置结束日期 
	}) 
	dtpicker.show(function(rs) {
		$(self).val(rs.text);
//		picker.dispose();
	});
});
//地区选择
$(".city").on("tap",function(){
	var self=this;
	var picker = new mui.PopPicker({
    	layer: 3
	});
    picker.setData([
    	{
	        value: '110000',
	        text: '北京市',
	        children: [{
	                value: "110101",
	                text: "东城区"
	        }]
	    }, 
	    {
	        value: '120000',
	        text: '天津市',
	        children: [{
		        value: "120101",
	            text: "和平区"
	        }, {
	            value: "120102",
	            text: "河东区"
	        }, {
	            value: "120104",
	            text: "南开区"
	        }]
	    },
	    {
	        value: '130000',
	        text: '广东省',
	        children: [{
		        value: "130101",
	            text: "广州市",
	            children: [{
				        value: "131001",
			            text: "白云区",
			        }, {
			            value: "131002",
			            text: "越秀区"
			        }, {
			            value: "131003",
			            text: "天河区"
			    }]
	        }, {
	            value: "130102",
	            text: "珠海市"
	        }, {
	            value: "130104",
	            text: "惠州市"
	        }]
	    }
    ])
	picker.pickers[0].setSelectedIndex(1);
	picker.pickers[1].setSelectedIndex(1);
	picker.show(function(SelectedItem) {
		console.log(SelectedItem);
	})
});