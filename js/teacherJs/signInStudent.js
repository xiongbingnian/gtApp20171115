/**********************************　学生签到　***********************************/
 var chart_member = echarts.init(document.getElementById('chart_member'));
 var option_chartMember = {
     tooltip: {
         trigger: 'axis'
     },
     toolbox: {
         show: true,
         feature: {
             dataZoom: {
                 yAxisIndex: 'none'
             },
             dataView: {readOnly: false},
             magicType: {type: ['line', 'bar']}
         }
     },
     xAxis:  {
         type: 'category',
         //splitLine:{
         //    show: true
         //},
         boundaryGap: false,
         data: ['03-01','03-02','03-03','03-04','03-05'],
         axisLabel: {
             textStyle:{
                 fontSize:"14"
             },
             interval:"0" //表示全部显示不间隔  auto:表示自动根据刻度个数和宽度自动设置间隔个数
         },
         axisLine:{
             lineStyle:{
                 width:5,
                 color:"#7BD238"
             }
         }
     },
     yAxis: {
         type: 'value',
         //splitLine:{show: false},//去除网格线
         axisLine:{
             lineStyle:{
                 width:5,
                 color:"#fff"
             }
         }
     },
//            itemStyle: {
//                normal: {
//                    label : {show: true,fontSize:18, position: 'top'}}  //显示对应数据
//            },
     series: [
         {
             //name:'积分统计',

             type:'line',
             data:[30, 20, 20,5, 25],
             //axisLabel: {
             //    textStyle: {
             //        fontSize: "18"
             //    }
             //},
             itemStyle: {
                 normal: {
                     color: function(params) {
                         var colorList = ['#808080','#808080','#808080','#808080',"#2EE7B5"];
                         return colorList[params.dataIndex]
                     },
                     borderColor:"#2EE7B5",
                     borderWidth:"5",
                     label : {show: true,fontSize:"28px", position: 'top'}
                 }  //显示对应数据
             },
             lineStyle:{
                 normal:{
                     color:"#2EE7B5"
                 }
             },
             areaStyle:{
                 normal:{
                     color:"#D5FBF1"
                 }
             }
         }
     ]
 };
 chart_member.setOption(option_chartMember);
 chart_member.setOption({
     color:["#2EE7B5"] ,
     fontSize:40,
     tooltip:{}
 }) ;
 $(window).resize(function(){
     chart_member.resize();
 });
 
 //我的签到页面跳转
document.getElementById("signInTeacher").addEventListener("tap",function(){
	mui.openWindow({
		url:"signInTeacher.html",
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

//学生签到情况页面跳转
mui(".studentSignIn_list").on("tap",".signInStudentPage",function(){
	mui.openWindow({
		url:"signInStudentPage.html",
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


