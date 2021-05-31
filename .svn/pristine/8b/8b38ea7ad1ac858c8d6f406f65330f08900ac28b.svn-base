 //日历
 var calUtil = {
     //当前日历显示的年份
     showYear:2015,
     //当前日历显示的月份
     showMonth:1,
     //当前日历显示的天数
     showDays:1,
     eventName:"load",
     //初始化日历
     init:function(signList){
         calUtil.setMonthAndDay();
         calUtil.draw(signList);
         calUtil.bindEnvent();
     },
     draw:function(signList){
         //绑定日历
         var str = calUtil.drawCal(calUtil.showYear,calUtil.showMonth,signList);
         $("#calendar").html(str);
         //绑定日历表头
         var calendarName=calUtil.showYear+"年"+calUtil.showMonth+"月";
         $(".calendar_month_span").html(calendarName);
     },
     //绑定事件
     bindEnvent:function(){
         //绑定上个月事件
         $(".calendar_month_prev").on("tap",function(){
             //ajax获取日历json数据
             var signList=[{"signDay":"10"},{"signDay":"11"},{"signDay":"12"},{"signDay":"13"}];
             calUtil.eventName="prev";
             calUtil.init(signList);

             $(".sign table td").fadeOut(10).fadeIn(800);
             skip();
         });
         //绑定下个月事件
         $(".calendar_month_next").on("tap",function(){
             //ajax获取日历json数据
             var signList=[{"signDay":"10"},{"signDay":"11"},{"signDay":"12"},{"signDay":"13"}];
             calUtil.eventName="next";
             calUtil.init(signList);
             $(".sign table td").fadeOut(10).fadeIn(800);
             skip();
         });

     },
     //获取当前选择的年月
     setMonthAndDay:function(){
         switch(calUtil.eventName)
         {
             case "load":
                 var current = new Date();
                 calUtil.showYear=current.getFullYear();
                 calUtil.showMonth=current.getMonth() + 1;
                 break;
             case "prev":
                 var nowMonth=$(".calendar_month_span").html().split("年")[1].split("月")[0];
                 calUtil.showMonth=parseInt(nowMonth)-1;
                 if(calUtil.showMonth==0)
                 {
                     calUtil.showMonth=12;
                     calUtil.showYear-=1;
                 }
                 break;
             case "next":
                 var nowMonth=$(".calendar_month_span").html().split("年")[1].split("月")[0];
                 calUtil.showMonth=parseInt(nowMonth)+1;
                 if(calUtil.showMonth==13)
                 {
                     calUtil.showMonth=1;
                     calUtil.showYear+=1;
                 }
                 break;
         }
     },
     getDaysInmonth : function(iMonth, iYear){
         var dPrevDate = new Date(iYear, iMonth, 0);
         return dPrevDate.getDate();
     },
     bulidCal : function(iYear, iMonth) {
         var aMonth = new Array();
         aMonth[0] = new Array(7);
         aMonth[1] = new Array(7);
         aMonth[2] = new Array(7);
         aMonth[3] = new Array(7);
         aMonth[4] = new Array(7);
         aMonth[5] = new Array(7);
         aMonth[6] = new Array(7);
         var dCalDate = new Date(iYear, iMonth - 1, 1);
         var iDayOfFirst = dCalDate.getDay();
         var iDaysInMonth = calUtil.getDaysInmonth(iMonth, iYear);
         var iVarDate = 1;
         var d, w;
         aMonth[0][0] = "日";
         aMonth[0][1] = "一";
         aMonth[0][2] = "二";
         aMonth[0][3] = "三";
         aMonth[0][4] = "四";
         aMonth[0][5] = "五";
         aMonth[0][6] = "六";
         for (d = iDayOfFirst; d < 7; d++) {
             aMonth[1][d] = iVarDate;
             iVarDate++;
         }
         for (w = 2; w < 7; w++) {
             for (d = 0; d < 7; d++) {
                 if (iVarDate <= iDaysInMonth) {
                     aMonth[w][d] = iVarDate;
                     iVarDate++;
                 }
             }
         }
         return aMonth;
     },
     ifHasSigned : function(signList,day){
         var signed = false;
         $.each(signList,function(index,item){
             if(item.signDay == day) {
                 signed = true;
                 return false;
             }
         });
         return signed ;
     },
     compareTime : function(dCalDate,current,differ){
         if(dCalDate==null){
             return 3;
         }
         if(dCalDate.getTime()+differ==current.getTime()){
             return 0;//第一个时间和第二个时间相差 differ毫秒
         }
         if(dCalDate.getTime()+differ<current.getTime()){
             return 1;//第一个时间和第二个时间相差小于 differ毫秒
         }
         if(dCalDate.getTime()+differ>current.getTime()){
             return 2;//第一个时间和第二个时间相差大于 differ毫秒
         }
     }
     ,
     drawCal : function(iYear, iMonth ,signList) {
         var myMonth = calUtil.bulidCal(iYear, iMonth);
         var htmls = new Array();
         htmls.push("<div class='sign_main' id='sign_layer'>");
         htmls.push("<div class='sign_succ_calendar_title'>");
         htmls.push("<div class='calendar_month_prev'></div>");//上月
         htmls.push("<div class='calendar_month_span'></div>");
         htmls.push("<div class='calendar_month_next'></div>");//下月
         htmls.push("</div>");
         htmls.push("<div class='sign' id='sign_cal'>");
         htmls.push("<table>");
         htmls.push("<tr>");
         htmls.push("<th>" + myMonth[0][0] + "</th>");
         htmls.push("<th>" + myMonth[0][1] + "</th>");
         htmls.push("<th>" + myMonth[0][2] + "</th>");
         htmls.push("<th>" + myMonth[0][3] + "</th>");
         htmls.push("<th>" + myMonth[0][4] + "</th>");
         htmls.push("<th>" + myMonth[0][5] + "</th>");
         htmls.push("<th>" + myMonth[0][6] + "</th>");
         htmls.push("</tr>");
         var d, w;
         for (w = 1; w < 7; w++) {
             htmls.push("<tr>");
             for (d = 0; d < 7; d++) {
                 var ifHasSigned = calUtil.ifHasSigned(signList,myMonth[w][d]);
                 var dCalDate=null;
                 if(!isNaN(myMonth[w][d]) ){
                     dCalDate =new Date(iYear, iMonth-1,myMonth[w][d]);
                 }
                 var current=new Date(new Date().getFullYear(),(new Date().getMonth()),new Date().getDate());
                 var compareTime = calUtil.compareTime(dCalDate,current,0);
                 var compareTime1 = calUtil.compareTime(dCalDate,current,5*24*60*60*1000);
                 // console.log(ifHasSigned);
                 switch(compareTime){
                     case 0:
                         if(ifHasSigned){
                             htmls.push("<td><a class='writeDaily'><div class='green_circle'><span class='date'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</span><span class='font_green'>已写</span></div></a></td>");//当天已写
                         } else {
                             htmls.push("<td><a class='writeDaily'><div class='green_circle'><span class='date'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</span><span class='font_red'>未写</span></div></a></td>");//当天未写
                         }
                         break;
                     case 1:
                         if(compareTime1==2) {
                             if (ifHasSigned) {
                                 htmls.push("<td><a class='writeDaily'><div class='lightGreen_circle'><span class='date'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</span><span class='font_green'>已写</span></div></a></td>");//当天之前4内天已写（可修改，可评论）
                             } else {
                                 htmls.push("<td><a class='writeDaily'><div class='lightGreen_circle'><span class='date'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</span><span class='font_red'>未写</span></div></a></td>");//当天之前4内天未写（可补写）
                             }
                         }else{
                             if (ifHasSigned) {
                                 htmls.push("<td><a class='teacherRemarkOn'><div class='green_border'><span class='date'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</span><span class='font_green'>已写</span><b class='evaluate'>优</b></div></a></td>");//当天之前4天已写（可评论）
                             } else {
                                 htmls.push("<td><div class='gray_circle'><span class='date'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</span><span class='font_gray'>未写</span></div></td>");//当天之前4天未写
                             }
                         }
                         break;
                     case 2:
                         htmls.push("<td>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</td>");//当天之后
                         break;

                     case 3:
                         htmls.push("<td>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</td>");//空格
                         break;
                 }
             }
             htmls.push("</tr>");
        }
         htmls.push("</table>");
         htmls.push("</div>");
         htmls.push("</div>");
         return htmls.join('');
        
     }
 };
 $(function(){
     //ajax获取日历json数据
     var signList=[{"signDay":"1"},{"signDay":"2"},{"signDay":"3"},{"signDay":"4"},{"signDay":"5"},{"signDay":"6"},{"signDay":"7"},{"signDay":"11"},{"signDay":"12"},{"signDay":"13"},{"signDay":"15"},{"signDay":"19"},{"signDay":"20"}];
     calUtil.init(signList);
     skip();
 });
function skip(){
	mui(".sign").on("tap",".writeDaily",function(){
		mui.openWindow({
			url:"writeDaily.html",
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
	mui(".sign").on("tap",".teacherRemarkOn",function(){
		mui.openWindow({
			url:"teacherRemarkOn.html",
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
}
