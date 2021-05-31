/**
 * Created by Administrator on 2017/2/27 0027.
 */
mui.init();
function setWH(){
    var perpendicularLineH=parseInt($(".monthly_table").height())*0.72;
    var containerW=$(".container").width();
    $(".perpendicular_line").height(perpendicularLineH);
    $(".popup_box,.exit_box,.rating_head,.prompt_box,.imgPvw_box,.close_box,.evaluate_fixed").width(containerW);
    $(".btn_rating").width(containerW);
}
setWH();
$(window).resize(function(){
    setWH();
});
/*页面缩放*/
mui.plusReady(function(){
    plus.webview.currentWebview().setStyle({
        scalable:true
    });
});
/*积分动画*/
function integralAnimation(){
   	$(".awarded_marks").html("+10").show().animate({"font-size":"3rem"},500).animate({"top":"-3rem"},500);
	setTimeout(function () {
        $(".awarded_marks").hide().animate({"font-size":"1rem"},10).animate({"top":"1rem"},10);
        $(".integral span").html("55");
    },1000);
}
integralAnimation();
$(function(){
    $("#btn_save").on("tap",function(){
        $(".prompt_box").fadeIn(500,function(){
            setTimeout(function(){
                $(".prompt_box").fadeOut(1500);
            },1500)  ;
        });
    });
    /*签到情况进度条*/
   function proportion(){
	   	$(".all_numW .proportion_numW").each(function(){
			var proportionNumW=parseInt($(this).children(".proportion_people").html())/parseInt($(this).parent().next(".all_people").html())*100;
			$(this).animate({"width":proportionNumW+"%"},1000);
		});
   }
   proportion();
	
   /*复选按钮样式*/
	mui(".checkbox_group").on("tap",".info_checkbox",function(){
	    if($(this).children("i").hasClass("no_checkbox")){
	        $(this).children("i").removeClass("no_checkbox").addClass("yes_checkbox");
	    }else{
	        $(this).children("i").addClass("no_checkbox").removeClass("yes_checkbox");
	    }
	});
    /***************首页******************/
	//积分页面跳转
	mui(".fold_head,.info_box").on("tap",".integral",function(){
		mui.openWindow({
			url:"integral.html",
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
    //提醒
    $(".i_close").on("tap",function(){
        $(".remind").slideUp();
    });
    //积分动画
    $(".btn_signIn").on("tap",function(){
        integralAnimation();
    });

    function step(){
        //通知公告动画
        $(".inform_list").animate({"margin-top":"-10rem"},1000).animate({"margin-top" :"10rem"},10).animate({"margin-top" :"0rem"},1000);
        setTimeout(step,5000);
    }
    step();


    /******弹窗JS********/
    $(".mask,.i_popupClose").on("tap",function(){
        $(".popup").hide();
        $(".on_video").show()
    });
    $(".i_query").on("tap",function(){
        $(".query_popup").show();
    });
    $(".btn_radio").on("tap",function(){
        $(".btn_radio").removeClass("on_btn_radio");
        $(this).addClass("on_btn_radio");
    });

    $(".btn_exit").on("tap",function(){
       $(".exit_popup").show();
    });
    $(".btn_cancel").on("tap",function(){
        $(".exit_popup").hide();
    });

    /************通知公告************/
    mui(".informPage_list").on("tap", '.inform_title', function(){
        $(this).parent().siblings().children(".inform_content").removeClass("on");
        $(this).parent().siblings().find("i").each(function(){
            if($(this).hasClass("i_readMessage")){
                $(this).addClass("i_foldMessage");
            }
        });
        if($(this).next(".inform_content").hasClass("on")){
            $(this).next(".inform_content").removeClass("on").hide();
            $(this).children("i").removeClass().addClass("i_foldMessage");
        }else{
            $(".inform_content").hide();
            $(this).next(".inform_content").addClass("on").show();
            $(this).children("i").removeClass().addClass("i_readMessage");
        }
    });
    
	/************我的问题页面跳转************/
	mui(".fold_head").on("tap",".i_teacher",function(){
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
    /************写日报************/
    $(".file_upload").change(function() {
        var html = '<div class="imgVideo_box"> <img class="img_file" src="" alt=""> <video controls="controls" class="video_file" src=""></video> <div class="del_bg"></div> <i class="i_del"></i> </div>';
        $(this).parent(".imgVideoAdd").before(html);
        delPvw();
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $(this).parent().prev().children(".img_file") ;
        var $video =$(this).parent().prev().children(".video_file") ;
        if(fileObj && fileObj.files && fileObj.files[0]){
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            var file;
            for(var i=0; i<document.getElementById('file').files.length;i++){
                file = document.getElementById('file').files[i];
                if(!/image\/\w+/.test(file.type)){
                   // alert('其他类型');
                    $video.attr('src',dataURL).show();
                    $img.hide();
                }else{
                    $img.attr('src',dataURL).show();
                    $video.hide();
                    //alert('是图片')
                }
            }
        }
        //else{
        //    dataURL = $file.val();
        //    var imgObj = $(".preview");
        //    // 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
        //    // 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
        //    imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
        //    imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
        //}
    });
    function delPvw(){
        $(".del_bg,.i_del").on("tap",function(){
            $(this).parent(".imgVideo_box").addClass("on_del");
            $(".del_popup").show();
            $(".on_video").hide()
        });
        $(".btn_confirm").on("tap",function(){
            if($(".imgVideo_box").hasClass("on_del")){
                $(".del_popup").hide();
                $(".on_del").hide();
                $(".on_video").show()
            }
        });
        $(".imgVideo_box>img").on("tap",function(){
            $(".imgPvw_popup").show();
            $(".on_video").hide();
            var imgSrc=$(this)[0].src;
            $(".pvw_img").attr("src",imgSrc);
            //打开页面缩放
            $("meta[name=viewport]").attr("content","width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=5, user-scalable=yes")
        });
        mui(".imgPvw_popup").on("tap",".imgPvw_box",function(){
            $(".imgPvw_popup").hide();
            $(".on_video").show();
            //关闭页面缩放
            $("meta[name=viewport]").attr("content","width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=5, user-scalable=no")
        });
        $("video").on("tap",function(){
            $("video").removeClass("on_video").css("width","100%");
            $(this).addClass("on_video").css("width","50%");
        });
    }
    delPvw();

    $(".btn_return").on("tap",function(){
        $(".imgVideo_box").removeClass("on_del");
        $(".del_popup").hide();
        $(".on_video").show()
    });
    $(".leave").on("tap",function(){
        if($(this).children("i").hasClass("i_notSelected")){//请假时
            $(this).children("i").removeClass("i_notSelected").addClass("i_selected");
        }else{
            $(this).children("i").removeClass("i_selected").addClass("i_notSelected");
        }
    });
    /************招聘************/
    $(".btn_signUp").on("tap",function(){
        $(this).hide();
        $(".btn_cancelSignUp").css("display","inline-block").show();
        $(".registered").show();
    });
    $(".btn_cancelSignUp").on("tap",function(){
        $(".btn_signUp").show();
        $(this).hide();
        $(".registered").hide();
    });

    /**********评价子页面***************/
    mui(".rating_target").on("tap","p",function(){
        $(".rating_target p>i").removeClass("i_selected").addClass("i_notSelected");
        $(this).children("i").addClass("i_selected").removeClass("i_notSelected");
    });
    mui(".radio").on("tap","span",function(){
        $(this).parent().find("span").removeClass("radio_add");
        $(this).addClass("radio_add");
    });
    $(".btn_rating").on("tap",function(){
        $(this).addClass("btn_rating_gray").html("已评价");
        $(".i_selected").siblings().removeClass("hide");
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>$("header").height()){
            //$("header").hide();
            $(".evaluationContent_list").css("margin-top","20%");
            $(".rating_head").addClass("rating_head_add");
        }else if($(window).scrollTop()<$("header").height()){
            //$("header").show();
            $(".evaluationContent_list").css("margin-top","3%");
            $(".rating_head").removeClass("rating_head_add");
        }
    });


    /****************录入实习信息****************/
    $(".info_select").on("tap",function(){
        $(this).parent().find("i").removeClass("i_selected").addClass("i_notSelected");
        $(this).children("i").addClass("i_selected").removeClass("i_notSelected");
    });
   //是否签订顶岗实习协议
    $(".agreement_label").on("tap",function(){
        if($(this).find("i").hasClass("yes_checkbox")){
            $(this).nextAll().removeClass("hide");
        }else{
            $(this).nextAll().addClass("hide");
        }
    });
    //是否购买实习保险
    $(".insurance_label").on("tap",function(){
        if($(this).find("i").hasClass("yes_checkbox")){
            $(this).next().removeClass("hide");
        }else{
            $(this).next().addClass("hide");
        }
    });
    $(".pullDown_input").focus(function(){
        if($(this).next().children(".pullDown_list").find("li").length > 0){
            $(this).next().show();
        }
    }).blur(function(){
        $(this).next().hide();
    });
    mui(".pullDown_list").on("tap","li",function(){
        $(this).parent().parent().prev().val( $(this).html());
        $('#companyId').val($(this).attr('id'));
        $(this).parent().parent().hide();
        $(".pullDown_input").blur();
    });
    $(".btn_saveInfo").on("tap",function(){
        $(".company_popup").show();
    });
    $(".btn_saveCompanyInfo").on("tap",function(){
       $(".externalT_popup").show();
    });
    $(".upload").change(function() {
        var html = '<div class="imgVideo_box"> <img class="img_file" src="" alt="">  <div class="del_bg"></div> <i class="i_del"></i> </div>';
        $(this).parent(".imgVideoAdd").before(html);
        delPvw();
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $(this).parent().prev().children(".img_file") ;
        if(fileObj && fileObj.files && fileObj.files[0]){
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            $img.attr('src',dataURL).show();
        }
    });
    /********************我的留言******************/
   /* mui(".myMessage_list").on("tap","li",function(){
        $(this).children(".fold_box").children(".student_issue").children(".red_unread").hide();
        $(".unfold_box").hide();
        $(".fold_box").show();
        $(this).children(".unfold_box").show();
        $(this).children(".fold_box").hide();
    });*/
    
    mui(".myMessage_list").on("tap",".fold_box",function(){
        $(this).children(".student_issue").children(".red_unread").hide();
        $(".unfold_box").hide();
        $(".fold_box").show();
        $(this).next().show();
        $(this).hide();
    });


    /**********老师评审日报***********/
    $(".btn_frequently").on("tap",function(){
        $(".evaluate_popup").show();
    });
    mui(".evaluate_list").on("tap","span",function(){
        $(".evaluate_textarea").val($(this).html());
        $(".evaluate_popup").hide();
    });
    mui(".close_img").on("tap","img",function(){
        $(".evaluate_popup").hide();
    });
    mui(".evaluate_list").on("tap",".i_close",function(){
        $(this).parent("li").remove();
    });
    //添加常用评语
    $(".btn_add_frequently").click(function(){
    	if($(this).hasClass("on")){
    		$(this).removeClass("on").html("添加常用评语");
    		$(".add_remark,.btn_cancel_frequently").hide();
			if($(".add_remark").val()!=""){
				var html='<li><span>'+$(".add_remark").val()+'</span><i class="i_close"></i></li>'
				$(".evaluate_list").append(html);
			}
    	}else{
    		$(this).addClass("on").html("确定");
    		$(".add_remark,.btn_cancel_frequently").show();
    	}
   });
    $(".btn_cancel_frequently").click(function(){
		$(".add_remark,.btn_cancel_frequently").hide();
		$(".btn_add_frequently").removeClass("on").html("添加常用评语");
	});

    
});
