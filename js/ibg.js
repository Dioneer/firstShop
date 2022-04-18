
//картинка фоном========================================================================================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}

//Active========================================================================================================================
let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
if (isMobile.any()) {
	let menuParents = document.querySelectorAll('.menu-page__parent>a');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener('click', function (e) {
			menuParent.parentElement.classList.toggle('active');
			e.preventDefault();
		});
	}
	if (isMobile.any()) {
		let filterTitle = document.querySelector('.filter__title');
		filterTitle.addEventListener('click', function (e) {
			filterTitle.classList.toggle('active');
			_slideToggle(filterTitle.nextElementSibling);
		});
	}


} else {
	let menuParents = document.querySelectorAll('.menu-page__parent');

	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener('mouseenter', function (e) {
			menuParent.classList.add('active');
		});
		menuParent.addEventListener('mouseleave', function (e) {
			menuParent.classList.remove('active');
		});
	}
}


//===============================================================================================================================================================

let menuBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuBurger.addEventListener('click', function (e) {
	menuBurger.classList.toggle('active');
	_slideToggle(menuPageBody);
});

let searchSelect = document.querySelector('.search-page__items');
let searchList = document.querySelector('.categories-search-page');
searchSelect.addEventListener('click', function (e) {
	searchSelect.classList.toggle('active');
	_slideToggle(searchList);
});

//change. На label click не вешается, получается w click========================================================================================================================

let checkboxCategories = document.querySelectorAll('.categories-search-page__checkbox');
let searchActiveSelect = document.querySelector('.search-page__title');
for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategorie = checkboxCategories[index];
	checkboxCategorie.addEventListener("change", function (e) {
		checkboxCategorie.classList.toggle('active');

		let checkboxActiveCategories = document.querySelectorAll('.categories-search-page__checkbox.active');
		if (checkboxActiveCategories.length > 0) {
			searchActiveSelect.classList.add('categories');
			let searchQuantity = searchActiveSelect.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
		} else {
			searchActiveSelect.classList.remove('categories');
		}
	});
}
//картинка бэкграудом. Не работает, т.к. класса нет в HTML, видимо================================================================================================

let mainsliderImages = document.querySelectorAll('.mainslider__image');
let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .slick-dots>li');

for (let index = 0; index < mainsliderImages.length; index++) {
	const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
	mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
}


