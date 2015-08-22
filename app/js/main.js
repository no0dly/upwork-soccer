var app = (function () {

	function setUpListeners(){
		$('.navigation__trigger').on("click", _triggerNav);
		$('.navigation__item a[href^="#"]').on('click', _scrolling);
	}

	function _triggerNav() {
		
		var
			menu = $('.navigation__list');

		menu.stop().slideToggle();
	}

	function _scrolling(e) {
		e.preventDefault();
		var
			elementClick = $(this).attr("href"),
			destination = $(elementClick).offset().top,
			body = $('body');


		body.animate( { scrollTop: destination }, 1100 );
	}

	function _waypoint () {
		
		var
			$this = $(this.element),
			navLi = $('.navigation__item'),
			hash = '#' + $this.attr('id');

		$.each( navLi, function(){
			var $this = $(this),
				link = $this.children('a');

			link.removeClass('active');

			if ( link.attr('href') === hash ) {
				link.addClass('active');
			}
		});
	}


	return {
		init: function () {
			setUpListeners();
			$(".fancybox").fancybox();
			$('.slider .bxslider').bxSlider({
				pager: true,
				auto: true
			});
			$('.sponsors__list').bxSlider({
				minSlides: 2,
				maxSlides: 4,
				slideWidth: 200,
				slideMargin: 10,
				pager: false
			});
			$('.teams__list').bxSlider({
				pager: false,
				controls: true,
				slideWidth: 380,
				slideMargin: 10,
				minSlides: 3,
				maxSlides: 3
			});
			$('.tracked').waypoint({
				handler: _waypoint,
				offset: '15%'
			});
		}
	};

}());
app.init();

