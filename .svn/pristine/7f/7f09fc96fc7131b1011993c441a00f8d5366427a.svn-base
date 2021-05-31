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

$(function(){
    /********指导学生*******/
    $(".check_all").on("tap",function(){
       if($(this).children("i").hasClass("i_notSelected")){
           $(this).children("i").removeClass("i_notSelected").addClass("i_selected");
           $(".student_choice span").addClass("student_active");
       }else{
           $(this).children("i").addClass("i_notSelected").removeClass("i_selected");
           $(".student_choice span").removeClass("student_active");
       }
    });
   $(".student_choice span").on("tap",function(){
       if($(this).hasClass("student_active")){
            $(this).removeClass("student_active");
           $(".check_all").children("i").addClass("i_notSelected").removeClass("i_selected");
       }else{
           $(this).addClass("student_active");
            if($(".student_choice .student_active").length==$(".student_choice span").length){
                $(".check_all").children("i").removeClass("i_notSelected").addClass("i_selected");
            }
       }
   });
});