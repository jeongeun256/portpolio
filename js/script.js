$(function(){
	$(".submenu").hide();
	//서브메뉴를 숨긴다.
	$(".site-menu li").mouseover(function(){
	//메뉴 마우스를 올리면	
		$(this).children(".submenu").stop().slideDown();
		//메뉴의 자식인 서브메뉴를 멈추고 slideDown 시켜라.
	});
	$(".site-menu li").mouseout(function(){
	//메뉴 마우스가 벗어나면
		$(this).children(".submenu").stop().slideUp();
		//메뉴의 자식인 서브메뉴를 멈추고 slideUp 시켜라.
	});
});