$(document).ready(function(){
	$('.gnb').length && gnbMenu(); //GNB 메뉴
	$('.m_gnb_wrap').length && mGnb(); //모바일 GNB
	$('.site_link').length && siteBtn(); //패밀리링크
	$('.go_top').length && goTop(); //페이지상단이동
	$('.app_slide').length && appSlide(); //APP 슬라이드
	$('.app_tit_area').length && aniScrollStart(); //APP scroll 이벤트
});

$(window).on('load',function(){
	$('.m_gnb_wrap li.on .m_d_02').slideDown()
})

$(window).on('resize', function(){
	$width = $(window).innerWidth();

	if($width > 1017){
		$('.m_gnb_wrap').removeClass('on')
		dimHide()
	}
});

function aniScrollStart() {
	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		var appTitH = $('.app_tit_area').offset().top;

		if(scrollTop >= appTitH){
			$('.ani').addClass('animate__animated').css('visibility','visible')
		}
	});
}

function dimShow(){ /* 딤드 show */
	$('body').addClass('dim');
}
function dimHide(){ /* 딤드 hide */
	$('body').removeClass('dim');
}
function gnbMenu() { //GNB 메뉴
	var onMenu = $('.dept_01 > li.on').index();

	$('.menu_01').on('mouseover', function(){ //GNB 마우스이벤트
		$('.dept_01 li').removeClass('on')
		$('.gnb').addClass('on')
		$('.gnb_bg').css('height','246px')
	});
	$('.gnb').on('mouseleave', function(){ //GNB 마우스이벤트
		$('.dept_01 > li').eq(onMenu).addClass('on')
		$('.gnb').removeClass('on')
		$('.gnb_bg').css('height','0')
	});
}

function mGnb() {
	$('.m_gnb_wrap .mb_menu_01').on('click', function(){ //모바일 GNB 1depth
		$(this).parent().toggleClass('on')
		$('.mb_menu_01').not(this).parent('li').removeClass('on')
		$(this).siblings().stop().slideToggle()
		$('.mb_menu_01').not(this).siblings().stop().slideUp();
	});

	$('.gnb_ctrl').on('click', function(){ //모바일 GNB 열기
		$('.m_gnb_wrap').addClass('on')
		dimShow()
	})
	$('.close_gnb').on('click', function(){ //모바일 GNB 닫기
		$('.m_gnb_wrap').removeClass('on')
		dimHide()
	});
	$(document).mouseup(function (e){ //모바일 GNB 닫기
		var gnb = $('.m_gnb_wrap');
		if(gnb.has(e.target).length === 0 && gnb.hasClass('on')){
			gnb.removeClass('on');
			dimHide()
		}
	});
}

function siteBtn(){ //패밀리링크
	$('.site_link .sel').on('click', function(){
		$('.site_link').toggleClass('active')
	})
}

function goTop(){ //페이지상단이동
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){
			$('.go_top').addClass('active')
		}else{
			$('.go_top').removeClass('active')
		}
	});

	$('.go_top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
}

function appSlide () { //APP 슬라이드
	const element = document.querySelector('.ani');

	var appSlide = new Swiper('.app_slide .swiper',{
		slidesPerView:1,
		spaceBetween: 20,
		loop:true,
		pagination : { // 페이징 설정
			el : '.swiper-pagination',
			clickable : true,
		},
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
		},
	});
	appSlide.on('slideChange', function () {
		$('.ani img').css('opacity','0').css('visibility','hidden');
		$('.ani .txt_area').css('opacity','0').css('visibility','hidden');
		endAni()

		setTimeout(() =>
		$('.ani img').css('opacity','1').css('visibility','visible'), 1100);
		setTimeout(() =>
		$('.ani .txt_area').css('opacity','1').css('visibility','visible'), 1100);
		setTimeout(startAni, 1000);
	});

	function endAni(){
		$('.ani.fil').removeClass('animate__animated').removeClass('animate__fadeInLeft')
		$('.ani.bid').removeClass('animate__animated').removeClass('animate__backInDown')
		$('.ani.fir').removeClass('animate__animated').removeClass('animate__fadeInRight')
		$('.ani.fiu').removeClass('animate__animated').removeClass('animate__fadeInUp')
		$('.ani.bi').removeClass('animate__animated').removeClass('animate__bounceIn')
		$('.ani.fid').removeClass('animate__animated').removeClass('animate__fadeInDown')
		$('.ani.lsr').removeClass('animate__animated').removeClass('animate__lightSpeedInRight')
	}

	function startAni(){
		$('.ani.fil').addClass('animate__animated').addClass('animate__fadeInLeft')
		$('.ani.bid').addClass('animate__animated').addClass('animate__backInDown')
		$('.ani.fir').addClass('animate__animated').addClass('animate__fadeInRight')
		$('.ani.fiu').addClass('animate__animated').addClass('animate__fadeInUp')
		$('.ani.bi').addClass('animate__animated').addClass('animate__bounceIn')
		$('.ani.fid').addClass('animate__animated').addClass('animate__fadeInDown')
		$('.ani.lsr').addClass('animate__animated').addClass('animate__lightSpeedInRight')
	}

}

