/**
 * Created by suyu on 2017/6/10.
 */
var $ = require("../lib/jquery-3.1.1.js");
$(function(){
    var jonquil_page={
        jonquil_init:function(){
            this.jonquil_main_change();
        },
        //方法一

        //jonquil_main_change:function(){
        //    $(".jonquil-js .js-show").eq(0).show().siblings().hide();
        //    $('.js-nav-anchor').on('click',function(){
        //        $(this).addClass("jonquil-nav-show").siblings().removeClass("jonquil-nav-show");
        //        $(".jonquil-js .js-show").eq($(this).index()).show().siblings().hide();
        //        var index=$(this).index();
        //        para=$(this).data("anchor"),
        //            url=location.href+"#"+para;
        //        location.hash="#"+para;
        //    });
        //}



    //    方法二

        //jonquil_main_change:function(){
        //
        //    //$(".jonquil-js .js-show").eq(0).show().siblings().hide();
        //    $('.js-nav-anchor').on("click",function(){
        //        $(this).addClass("jonquil-nav-show").siblings().removeClass("jonquil-nav-show");
        //        $(".jonquil-js .js-show").eq($(this).index()).show().siblings().hide();
        //        var index=$(this).index();   //获取当前页数下标
        //        var anchor=$(this).data("anchor");
        //        //console.log(anchor);
        //        window.location.hash=anchor;   //改变地址栏
        //        //console.log(anchor);
        //        //用户点击切换触发此函数，变换场景
        //        window.onhashchange=function(){
        //        var geturl=location.hash;      //获取变化后的地址
        //            //console.log(geturl)
        //        var pushurl=geturl.substr();   //处理变化后的地址
        //            //console.log(pushurl)
        //            $(".jonquil-js>.js-show").each(function(){
        //                if($(this).data("anchor")==pushurl){
        //                    $(this).eq($(this)).show();
        //                }else{
        //                    $(this).eq($(this)).hide();
        //                }
        //            })
        //        }
        //    })
        //}


        //方法三

        jonquil_main_change:function(){
            $(".jonquil-js .js-show").eq(0).show().siblings().hide();
            $('.js-nav-anchor').on("click",function() {
                $(this).addClass("jonquil-nav-show").siblings().removeClass("jonquil-nav-show");
                $(".jonquil-js .js-show").eq($(this).index()).show().siblings().hide();
                var index=$(this).index();
                var anchor=$(this).data("anchor");
                history.pushState({state:anchor},null,anchor);
                //用户点击切换时触发此函数
                window.onpopstate=function(){
                      var getpurl=history.state;
                      $(".jonquil-js>.js-show").each(function(){
                          if($(this).data("anchor")==getpurl){
                              $(this).eq($(this)).show();
                          }else{
                              $(this).eq($(this)).hide();
                          }
                      })
                }
            })
        }




    };
    jonquil_page.jonquil_init();
});

