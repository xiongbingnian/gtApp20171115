//弹窗录入校外老师页面跳转
mui(".popup_section").on("tap",".enteringExternalTeacherInfo",function(){
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
})
