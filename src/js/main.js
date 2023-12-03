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

productsTabs.forEach((e) =>
	e.addEventListener('click', function (e) {
		const clicked = e.target.closest('.products__tab');
		if (!clicked.classList.contains('products__tab--active')) {
			console.log('b');
			allProductsTabs.forEach((e) =>
				e.classList.remove('products__tab--active')
			);
			clicked.classList.add('products__tab--active');
			productsEl.classList.remove('open');

			productTabActive = clicked;
		} else {
			productsEl.classList.toggle('open');
		}
	})
);
