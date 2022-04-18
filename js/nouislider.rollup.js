let filterLine = document.querySelector('.price-filter__slider');

noUiSlider.create(filterLine, {
	start: [0, 100000],
	connect: true,
	tooltips: [true, true],
	format: {
		to: (v) => v | 0,
		from: (v) => v | 0
	},
	range: {
		'min': 0,
		'max': 200000
	}
});
const filterStart = document.getElementById('price-start');
const filterEnd = document.getElementById('price-finish');
filterStart.addEventListener('change', setPriceValues);
filterEnd.addEventListener('change', setPriceValues);

function setPriceValues() {
	let filterStartValue;
	let filterEndValue;
	if (filterStart.value != '') {
		filterStartValue = filterStart.value;
	}
	if (filterEnd.value != '') {
		filterEndValue = filterEnd.value;
	}
	filterLine.noUiSlider.set([filterStartValue, filterEndValue]);
}