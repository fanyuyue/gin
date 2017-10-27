$(document).ready(function() {

	//nav淡入淡出
	$(".drdc").hover(function() {
		$(".dropdpwn_meau").stop().fadeIn("slow")
	}, function() {
		$(".dropdpwn_meau").stop().fadeOut("slow")
	})

	$(".news_dr").hover(function() {
		$(".dropdpwn_meau_ne").stop().fadeIn("slow")
	}, function() {
		$(".dropdpwn_meau_ne").stop().fadeOut("slow")
	})

	$(".search").hover(function() {
		$(".search_box").stop().fadeIn("slow")
	}, function() {
		$(".search_box").stop().fadeOut("slow")

	})

	//	//滑轮滚动监测
	//	$(window).scroll(function() {
	//		var top = $(this).scrollTop();
	//		console.log($(this).scrollTop());
	//		//新品首发
	//		if(top < 200) {
	//			$(".wow0").removeClass("item_anim0");
	//			$(".wow1").removeClass("item_anim1");
	//			$(".wow2").removeClass("item_anim2");
	//			$(".wow3").removeClass("item_anim3");
	//			$(".wow4").removeClass("item_anim4");
	//			$(".wow5").removeClass("item_anim5");
	//			$(".wow6").removeClass("item_anim6");
	//			$(".wow7").removeClass("item_anim7");
	//			$(".wow8").removeClass("item_anim8");
	//			$(".wow9").removeClass("item_anim9");
	//			$(".wow10").removeClass("item_anim10");
	//			$(".wow11").removeClass("item_anim11");
	//			$(".wow12").removeClass("item_anim12");
	//		}
	//		if(top >= 180 && top <= 1800) {
	//			$(".wow0").addClass("item_anim0");
	//			$(".wow1").addClass("item_anim1");
	//			$(".wow2").addClass("item_anim2");
	//			$(".wow3").addClass("item_anim3");
	//
	//		}
	//		if(top >= 500 && top <= 2800) {
	//			$(".wow4").addClass("item_anim4");
	//			$(".wow5").addClass("item_anim5");
	//			$(".wow6").addClass("item_anim6");
	//			$(".wow7").addClass("item_anim7");
	//
	//		}
	//		if(top >= 750 && top <= 2800) {
	//			$(".wow8").addClass("item_anim8");
	//			$(".wow9").addClass("item_anim9");
	//			$(".wow10").addClass("item_anim10");
	//			$(".wow11").addClass("item_anim11");
	//		}
	//		if(top >= 1300 && top <= 2800) {
	//			$(".wow12").addClass("item_anim12");
	//		} else if(top > 2800) {
	//			$(".wow0").removeClass("item_anim0");
	//			$(".wow1").removeClass("item_anim1");
	//			$(".wow2").removeClass("item_anim2");
	//			$(".wow3").removeClass("item_anim3");
	//			$(".wow4").removeClass("item_anim4");
	//			$(".wow5").removeClass("item_anim5");
	//			$(".wow6").removeClass("item_anim6");
	//			$(".wow7").removeClass("item_anim7");
	//			$(".wow8").removeClass("item_anim8");
	//			$(".wow9").removeClass("item_anim9");
	//			$(".wow10").removeClass("item_anim10");
	//			$(".wow11").removeClass("item_anim11");
	//			$(".wow12").removeClass("item_anim12");
	//		}
	//		
	//	})
	//返回顶部	
	function gotoTop(min_height) {

		$(".fixed_box").click( //定义返回顶部点击向上滚动的动画
			function() {
				$('html,body').animate({
					scrollTop: 0
				}, 700);
			})
		//获取页面的最小高度，无传入值则默认为600像素
		min_height ? min_height = min_height : min_height = 600;
		//为窗口的scroll事件绑定处理函数
		$(window).scroll(function() {
			//获取窗口的滚动条的垂直位置
			var s = $(window).scrollTop();
			//当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
			if(s > min_height) {
				$(".fixed_box").fadeIn(100);
			} else {
				$(".fixed_box").fadeOut(200);
			};
		});
	};
	gotoTop(500);
})