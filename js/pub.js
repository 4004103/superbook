$(function() {

    /* nav */

    //slide way
    var $nav = $(".nav")
    var $nav_list = $(".nav__item > a");

    $nav_list.on("mouseover focus", function(e) {
        $nav.addClass("on");
    });
    $nav.on("mouseleave", function(e) {
        $nav.removeClass("on");
    });

    $(".nav__item-2dep:last > a").on("blur", function() {
        $nav.removeClass("on");
    });


    /* 메인 배너 */
    var bnSlider = $('#bnSlider').bxSlider({
        //autoHover: true,
        //pagerSelector: '.selector', //셀렉터에 pager를 $selector에 append
        //autoControls: true, //재생 정지버튼
        //autoControlsSelector: '.selector', //재생,정지버튼을 $selector에  append
        mode:'fade',
        //tickerHover: true,
        //autoHover:true,
        auto:true,
        controls:true,
        pause: 3000,
		pager: false,
        //autoControls: true, //재생,정지버튼
        prevSelector: '.main-banner__btn--prev',
        nextSelector: '.main-banner__btn--next'
    });

    // $(".main-banner__btn--prev").on("click",function(){
    //     bnSlider.goToPrevSlide();
    // });
    // $(".main-banner__btn--next").on("click",function(){
    //     bnSlider.goToNextSlide();
    // });

	/* 상단으로 */
	$("#top_btn").on("click", function() {
		$("html, body").animate({scrollTop:0}, '500');
		return false;
	});

});
