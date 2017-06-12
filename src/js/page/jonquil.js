/**
 * Created by suyu on 2017/6/10.
 */
var $ = require("../lib/jquery-3.1.1.js");
$(function(){
    var jonquil_page={
        jonquil_init:function(){
            this.jonquil_main_change();
        },
        jonquil_main_change:function(){
            $(".jonquil-js .js-show").eq(0).show().siblings().hide();
            $('.js-nav-anchor').on('click',function(){
                $(this).addClass("jonquil-nav-show").siblings().removeClass("jonquil-nav-show");
                $(".jonquil-js .js-show").eq($(this).index()).show().siblings().hide();
                var index=$(this).index();
                para=$(this).data("anchor"),
                    url=location.href+"#"+para;
                location.hash="#"+para;
            });
        }
    }
    jonquil_page.jonquil_init();
});

