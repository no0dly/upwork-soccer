// var app = (function () {

// 	$('.bxslider').bxSlider({

// 	});

// }());


$(document).ready(function(){

	$('.navigation__trigger').on("click", function(){
		$('.navigation__list').slideToggle();
	});

	$('.bxslider').bxSlider({
		// auto: true,
		pager: true
	});

	$(".fancybox").fancybox();
});