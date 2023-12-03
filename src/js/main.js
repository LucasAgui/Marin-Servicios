'strict';

///////////////////////////////////
// Products tab functionality

const productsEl = document.querySelector('.products');
let productTabActive = Array.from(
	document.querySelectorAll('.products__tab')
).find((e) => e.classList.contains('products__tab--active'));
const productsTabs = Array.from(document.querySelectorAll('.products__tab'));
const tabContainerEl = document.querySelector('.products__tab-container');
const allProductsTabs = Array.from(document.querySelectorAll('.products__tab'));

productTabActive.addEventListener('click', function (e) {
	productsEl.classList.add('open');
});

productsTabs.forEach((e) =>
	e.addEventListener('click', function (e) {
		const clicked = e.target.closest('.products__tab');
		if (!clicked.classList.contains('products__tab--active')) {
			allProductsTabs.forEach((e) =>
				e.classList.remove('products__tab--active')
			);
			clicked.classList.add('products__tab--active');
			productsEl.classList.remove('open');
		} else {
			productsEl.classList.add('open');
		}
	})
);
