/**
 * Created by suyu on 2017/6/10.
 */
var $ = require("../lib/jquery-3.1.1.js");
	var jump={
		    turn:function(){
		    	this.anchor();
		    },
		    anchor:function(){
		    	//锚点跳转
		    		$(".house_nav>a").on("click",function(){
						var _index=$(this).index(),
						para=$(this).data("id"),
						url=location.href+'#'+'para';
						location.hash='#'+para;
						
						$(".warp").eq(_index).addClass("con").siblings().removeClass("con");
				
				//tab切换
						$(".nav_1").eq(_index).addClass("nav_1 housen").siblings().removeClass("housen");
					})
		    }
	}
jump.turn();