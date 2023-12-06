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
const productsContent = document.querySelectorAll('.products__content');

productsTabs.forEach((e) =>
	e.addEventListener('click', function (e) {
		const clicked = e.target.closest('.products__tab');
		if (!clicked.classList.contains('products__tab--active')) {
			allProductsTabs.forEach((e) =>
				e.classList.remove('products__tab--active')
			);
			clicked.classList.add('products__tab--active');
			productsContent.forEach((e) =>
				e.classList.remove('products__content--active')
			);
			document
				.querySelector(`.products__content--${clicked.dataset.tab}`)
				.classList.add('products__content--active');
			productsEl.classList.remove('open');

			productTabActive = clicked;
		} else {
			productsEl.classList.toggle('open');
		}
	})
);

/////////////////////////////////////////////////////////////////////
//Smooth scrolling for all links

document.addEventListener('DOMContentLoaded', function () {
	// Selecciona todos los enlaces que comienzan con #
	var links = document.querySelectorAll('a[href^="#"]');

	links.forEach(function (link) {
		link.addEventListener('click', function (event) {
			var targetId = this.getAttribute('href').substring(1);
			var target = document.getElementById(targetId);

			if (target) {
				event.preventDefault();

				// Obtiene la posición del elemento en relación con la parte superior de la página
				var rect = target.getBoundingClientRect();

				// Ajusta el cálculo considerando el espacio adicional (margin-top) en el elemento de destino
				var offsetTop =
					rect.top +
					window.scrollY -
					document.querySelector('.header').offsetHeight;

				// Ajusta también para el espacio adicional (margin-top) en el elemento de destino
				var marginTop = window.getComputedStyle(target).marginTop;
				offsetTop -= parseFloat(marginTop);

				// Realiza la animación de desplazamiento suave
				scrollToOffset(offsetTop, 1000);
			}
		});
	});

	// Función para realizar el desplazamiento suave
	function scrollToOffset(offset, duration) {
		var start = window.pageYOffset;
		var startTime =
			'now' in window.performance ? performance.now() : new Date().getTime();

		function scroll() {
			var currentTime =
				'now' in window.performance ? performance.now() : new Date().getTime();
			var timeElapsed = currentTime - startTime;
			var progress = Math.min(timeElapsed / duration, 1);

			window.scrollTo(0, easeInOutCubic(start, offset, progress));

			if (timeElapsed < duration) {
				requestAnimationFrame(scroll);
			}
		}

		function easeInOutCubic(start, end, progress) {
			progress /= 0.5;
			if (progress < 1)
				return ((end - start) / 2) * progress * progress * progress + start;
			progress -= 2;
			return ((end - start) / 2) * (progress * progress * progress + 2) + start;
		}

		requestAnimationFrame(scroll);
	}
});
/////////////////////////////////////////////////////////////////////
// Mobile navigation

const btnMobileEl = document.querySelector('.nav__mobile');
const headerEl = document.querySelector('.header');

btnMobileEl.addEventListener('click', function () {
	headerEl.classList.toggle('nav-open');
	document.body.classList.add('sticky');
});

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		const href = link.getAttribute('href');
		// Close mobile naviagtion
		if (link.classList.contains('nav__link')) {
			headerEl.classList.toggle('nav-open');
		}
	});
});

/////////////////////////////////////////////////////////////////////
// Products camión functionality

const products = document.querySelectorAll('.product');
const productTypes = document.querySelectorAll('.product__type');
const productsTypesAlt = document.querySelector('.product__alt');

productTypes.forEach((e) =>
	e.addEventListener('click', function (e) {
		const clicked = e.target.closest('.product__type');
		console.log(clicked);
		document
			.querySelector(`.product--${clicked.dataset.tab}`)
			.classList.toggle('open');
	})
);

productsTypesAlt.forEach((e) =>
	addEventListener('click', (e) => {
		const clicked = e.target.closest('.product__type');
		console.log(clicked);
	})
);
