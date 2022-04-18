//SLIDERS
//initialization

$(document).ready(function () {
	$('.mainslider__body').slick({
		dots: true,
		arrows: false,
		adaptiveHeight: true,
		accessibility: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		initialSlide: 0,
		waiteForAnimate: false,
		modileFirst: false,
		appendDots: $('.mainslider__dotts'),
	});
});

//SLIDERS
//initialization
let $status = $('.paging');
let $count = $('.count');
let $slickElement = $('.wrapper-slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status.text(i);
	$count.text('/' + ' ' + slick.slideCount);

});

$(document).ready(function () {
	$('.header-products-slider__prev').click(function (event) {
		$('.header-products-slider__prev').addClass('active');
		if ($('.header-products-slider__prev').hasClass('active')) {
			$('.header-products-slider__next').removeClass('active');
		}
	});
	$('.header-products-slider__next').click(function (event) {
		$('.header-products-slider__next').addClass('active');
		if ($('.header-products-slider__next').hasClass('active')) {
			$('.header-products-slider__prev').removeClass('active');
		}
	});
});

$(document).ready(function () {
	$('.wrapper-slider').slick({
		dots: false,
		arrows: true,
		adaptiveHeight: true,
		accessibility: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		initialSlide: 0,
		waiteForAnimate: false,
		modileFirst: false,
		prevArrow: $('.header-products-slider__prev'),
		nextArrow: $('.header-products-slider__next'),
	});
});

//SLIDERS
//initialization

$(document).ready(function () {
	$('.longslider__prev').click(function (event) {
		$('.longslider__prev').addClass('active');
		if ($('.longslider__prev').hasClass('active')) {
			$('.longslider__next').removeClass('active');
		}
	});
	$('.longslider__next').click(function (event) {
		$('.longslider__next').addClass('active');
		if ($('.longslider__next').hasClass('active')) {
			$('.longslider__prev').removeClass('active');
		}
	});
});

$(document).ready(function () {
	$('.long-slider').slick({
		dots: false,
		arrows: true,
		adaptiveHeight: false,
		accessibility: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		initialSlide: 0,
		waiteForAnimate: false,
		modileFirst: false,
		prevArrow: $('.longslider__prev'),
		nextArrow: $('.longslider__next'),
		responsive: [{
			breakpoint: 992.98,
			settings: { slidesToShow: 4 }
		}, {
			breakpoint: 767.98,
			settings: { slidesToShow: 3 }
		}, {
			breakpoint: 600,
			settings: { slidesToShow: 2 }
		}, {
			breakpoint: 479.98,
			settings: { slidesToShow: 1, adaptiveHeight: true }
		}]
	});
});

//SLIDERS
//initialization

$(document).ready(function () {
	$('.product-mainslider').slick({
		dots: false,
		arrows: false,
		asNavFor: ".product-subslider",
		fade: true,
		loop: true,
	});

	$('.product-subslider').slick({
		dots: false,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: ".product-mainslider",
		focusOnSelect: true,
		touchThreshold: 15,
	});
});