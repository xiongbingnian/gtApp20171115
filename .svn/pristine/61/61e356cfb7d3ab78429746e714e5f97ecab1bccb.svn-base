 //老师签到
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
         });
         //绑定下个月事件
         $(".calendar_month_next").on("tap",function(){
             //ajax获取日历json数据
             var signList=[{"signDay":"6"},{"signDay":"10"},{"signDay":"11"},{"signDay":"12"},{"signDay":"13"},{"signDay":"14"}];
             calUtil.eventName="next";
             calUtil.init(signList);
             $(".sign table td").fadeOut(100).fadeIn(1000);
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
     compareTime : function(iYear,iMonth,iday){
         var dCalDate = new Date(iYear, iMonth - 1, iday);
         var current=new Date(new Date().getFullYear(),(new Date().getMonth()),new Date().getDate());
         if(isNaN(iday)){
             return 3;//时间不存在
         }
         if(dCalDate.getTime()==current.getTime()){
             return 0;//就是今天
         }
         if(dCalDate.getTime()<current.getTime()){
             return 1;//就是今天之前
         }
         if(dCalDate.getTime()>current.getTime()){
             return 2;//就是今天之后
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
                 var compareTime = calUtil.compareTime(iYear, iMonth,myMonth[w][d]);
                 // console.log(ifHasSigned);
                 switch(compareTime){
                     case 0:
                         if(ifHasSigned){
                             htmls.push("<td class='today_yesSignIn'><div class='green_circle lineHeight'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "<i class='i_yesSignIn'></i></div></td>");//当天已签到
                         } else {
                             htmls.push("<td class='today_noSignIn'><div class='green_circle lineHeight'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</div></td>");//当天未签到
                         }
                         break;
                     case 1:
                         if(ifHasSigned){
                             htmls.push("<td class='yesSignIn'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "<i class='i_yesSignIn'></i></td>");//当天之前已签到
                         } else {
                             htmls.push("<td class='noSignIn'><div class='gray_circle lineHeight'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</div></td>");//当天之前未签到
                         }
                         break;
                     case 2:
                         htmls.push("<td>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</td>");//当天之后日期
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
	 var signList=[{"signDay":"2"},{"signDay":"3"},{"signDay":"6"},{"signDay":"10"},{"signDay":"11"},{"signDay":"12"},{"signDay":"13"}];
	 calUtil.init(signList);
	 $(".btn_signIn_FF853B").on("tap",function(){
	     $(".awarded_marks").show().animate({"font-size":"3rem"},500).animate({"top":"-3rem"},500);
	     setTimeout(function () {
	         $(".awarded_marks").hide().animate({"font-size":"1rem"},10).animate({"top":"1rem"},10);
	         $(".integral span").html("55");
	     },1000);
	
	     var today=new Date().getDate();
	     signList.push({"signDay":today});
	     console.log(signList);
	     calUtil.init(signList);
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
 

