//Spollers
let spollers = document.querySelectorAll(".spoller");
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spoller.classList.contains('spoller-992') && window.innerWidth > 992) {
				return false;
			}
			if (spoller.classList.contains('spoller-768') && window.innerWidth > 768) {
				return false;
			}
			if (spoller.closest('.spollers').classList.contains('one')) {
				let curent_spollers = spoller.closest('.spollers').querySelectorAll('.spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			spoller.classList.toggle('active');
			_slideToggle(spoller.nextElementSibling);
		});
	}
}

