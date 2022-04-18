$(document).ready(function () {
	$('.menu__icon').click(function (event) {
		$('.menu__icon, .menu__body, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});