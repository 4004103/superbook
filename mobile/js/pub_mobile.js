
$(function() {

    /* 메인 배너 */
    var bnSlider = $('#bnSlider').bxSlider({
        //autoHover: true,
        //pagerSelector: '.selector', //셀렉터에 pager를 $selector에 append
        //autoControls: true, //재생 정지버튼
        //autoControlsSelector: '.selector', //재생,정지버튼을 $selector에  append
        //tickerHover: true,
        //autoHover:true,
		//autoControls: true, //재생,정지버튼
		//pagerCustom: '.main_banner_bottom',
		controls:false,  //좌우 버튼
		mode:'fade',
        auto:true,
		pager:false,
        pause: 3000
    });

	//상단으로
	$("#top_btn").on("click", function() {
		$("html, body").animate({scrollTop:0}, '500');
		return false;
	});

	//폰트 크기 조정 위치 지정
	var font_resize_class = get_cookie("ck_font_resize_add_class");
	if( font_resize_class == 'ts_up' ){
		$("#text_size button").removeClass("select");
		$("#size_def").addClass("select");
	} else if (font_resize_class == 'ts_up2') {
		$("#text_size button").removeClass("select");
		$("#size_up").addClass("select");
	}

	$(".hd_opener").on("click", function() {
		var $this = $(this);
		var $hd_layer = $this.next(".hd_div");

		if($hd_layer.is(":visible")) {
			$hd_layer.hide();
			$this.find("span").text("열기");
		} else {
			var $hd_layer2 = $(".hd_div:visible");
			$hd_layer2.prev(".hd_opener").find("span").text("열기");
			$hd_layer2.hide();

			$hd_layer.show();
			$this.find("span").text("닫기");
		}
	});

	$("#container").on("click", function() {
		$(".hd_div").hide();

	});

	$(".btn_gnb_op").click(function(){
		$(this).toggleClass("btn_gnb_cl").next(".gnb_2dul").slideToggle(300);

	});

	$(".hd_closer").on("click", function() {
		var idx = $(".hd_closer").index($(this));
		$(".hd_div:visible").hide();
		$(".hd_opener:eq("+idx+")").find("span").text("열기");
	});


});


