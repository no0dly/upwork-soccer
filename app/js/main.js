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
			destination = $(elementClick).offset().top - 160,
			body = $('body');


		body.animate( { scrollTop: destination }, 1100 );
	}

	function _waypoint ( direction ) {
		
		var
			$this = $(this.element),
			navLi = $('.navigation__item'),
			hash = '#' + $this.attr('id');

		$.each( navLi, function(){
			var $this = $(this),
				link = $this.children('a'),
				prevLink = $this.prev().children('a');

			link.removeClass('active');

			if ( link.attr('href') === hash ) {
				if(direction === 'down') {

					link.addClass('active');

				} else {

					prevLink.addClass('active');

				}
			}

		});
	}

	function _slideMenu ( direction ) {

		var
			nav = $('#menu');

		if ( direction === 'down') {
			nav.hide().addClass('pinned').slideDown(1000);
		} else {
			nav.slideUp(function(){
				nav.removeClass('pinned').fadeIn(500);
			});
		}
		
	}


	return {
		init: function () {
			setUpListeners();
			$(".fancybox").fancybox();
			$('.slider .bxslider').bxSlider({
				pager: true,
				auto: true
			});
			$('.teams__list').bxSlider({
				pager: false,
				controls: true,
				slideWidth: 320,
				slideMargin: 20,
				minSlides: 3,
				maxSlides: 3
			});
			$('.tracked').waypoint({
				handler: _waypoint,
				offset: '20%'
			});
			$('.slide-menu').waypoint({
				handler: _slideMenu,
				offset: '15%'
			});
		}
	};

}());
app.init();

