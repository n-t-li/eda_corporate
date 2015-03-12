$(document).ready(function(){

	$('.menu .menu_show').click(function(){
		$('.menu ul').slideToggle(600);
	});
	$('.menu_footer .menu_show').click(function(){
		$('.menu_footer ul').slideToggle(600);
	});

	$(document).click(function(e){
		if($('.menu_show').css('display') == 'block'){
			if ($(e.target).parents().filter('.menu:visible').length != 1 && $(e.target).parents().filter('.menu_footer:visible').length != 1){
				$('.menu ul').slideUp(600);
				$('.menu_footer ul').slideUp(600);
			}
		}
	});

	$('.a_section_1').click(function(){
		$('html, body').animate({
			scrollTop: ($('.section_1').offset().top-80)
		},1000);
	});
	$('.a_section_2').click(function(){
		$('html, body').animate({
			scrollTop: ($('.section_2').offset().top-162)
		},1000);
	});
	$('.a_section_3').click(function(){
		$('html, body').animate({
			scrollTop: ($('.section_3').offset().top-80)
		},1000);
	});
	$('.a_section_4').click(function(){
		$('html, body').animate({
			scrollTop: ($('.section_4').offset().top-80)
		},1000);
	});
	$('.a_section_5').click(function(){
		$('html, body').animate({
			scrollTop: ($('.section_5').offset().top-80)
		},1000);
	});

	$('.button_on_top').click(function(){
		$('html, body').animate({
			scrollTop: ($('.header').offset().top)
		},1000);
	});

	$('.tabs_1 a').click(function(){
		$('.tabs_1').find('.active').removeClass('active');
		$(this).addClass('active');
		$('.tab_content_1').css('display', 'none');
		$('.'+$(this).attr('id')+'_content').fadeIn(600);
	});

	if(device.desktop()){
		$('.video').css('display', 'block');
	}
	if(device.mobile() || device.tablet()){
		$('body').addClass('mobile');
	}

	if($(window).width() <= 600){
		$('.form_linkedin').attr('data-width', '300');
	}
});

$(window).scroll(function(){
	if($(window).scrollTop() >= 650){
		$('.button_on_top').fadeIn(600);
	}
	else{
		$('.button_on_top').fadeOut(600);
	}

	var tmp = $('.header').height();
	if($(window).scrollTop() >= tmp-82){
		$('.header_top').addClass('header_top_grey');
	}
	else{
		$('.header_top').removeClass('header_top_grey');
	}
});

$(window).resize(function(){
	if($(window).width() < 660){
		$('.menu ul').css('display', 'none');
		$('.menu_footer ul').css('display', 'none');
	}
	if($(window).width() > 660){
		$('.menu ul').css('display', 'block');
		$('.menu_footer ul').css('display', 'block');
	}
});