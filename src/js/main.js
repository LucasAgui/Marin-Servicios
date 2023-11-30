/////////////////////////////////////////////////////////////////////
//Tabs products
const tabs = document.querySelectorAll('.products__tab');
const tabsContainer = document.querySelector('.products__tab-container');
const tabsContent = document.querySelectorAll('.products__content');

tabsContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.products__tab');
	console.log(clicked);
	if (!clicked) return;

	// Activar tab
	tabs.forEach((t) => t.classList.remove('products__tab--active'));
	clicked.classList.add('products__tab--active');

	// Activar contenido
	tabsContent.forEach((c) => c.classList.remove('products__content--active'));
	document
		.querySelector(`.products__content--${clicked.dataset.tab}`)
		.classList.add('products__content--active');
});

/////////////////////////////////////////////////////////////////////
//Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
	slides.forEach(
		(s, i) => (s.style.transform = `translateX(${102 * (i - slide)}%)`)
	);
};

goToSlide(0);

//Next slide
const nextSlide = function () {
	if (curSlide === maxSlide - 1) {
		curSlide = 0;
	} else {
		curSlide++;
	}
	goToSlide(curSlide);
};
//Prev slide
const prevSlide = function () {
	if (curSlide === 0) {
		curSlide = maxSlide - 1;
	} else {
		curSlide--;
	}
	goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

/////////////////////////////////////////////////////////////////////
//Tabs services
const serTabs = document.querySelectorAll('.services__tab');
const serTabsContainer = document.querySelector('.services__tab-container');
const serTabsContent = document.querySelectorAll('.services__content');
const serTabsIcons = document.querySelectorAll('.service__icon');

let curTab = 0;
let needChange = false;

const closeTab = function () {
	document
		.querySelector(`.services__tab--${curTab}`)
		.classList.toggle('services__tab--active');
	document
		.querySelector(`.services__content--${curTab}`)
		.classList.toggle('services__content--active');
	document
		.querySelector(`.service__icon--${curTab}`)
		.classList.toggle('service__icon--active');
};

const openTab = function (tab) {
	// Activar contenido
	serTabsContent.forEach((c) =>
		c.classList.remove('services__content--active')
	);
	document
		.querySelector(`.services__content--${tab}`)
		.classList.add('services__content--active');

	// Activar icono
	serTabsIcons.forEach((i) => i.classList.remove('service__icon--active'));
	document
		.querySelector(`.service__icon--${tab}`)
		.classList.add('service__icon--active');
};

serTabsContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.services__tab');
	if (!clicked) return;
	if (clicked.dataset.tab == curTab) {
		// Cerrar tab si es la misma
		closeTab();
		serTabsIcons.forEach((i) => i.classList.remove('service__icon--active'));
		curTab = null;
	} else {
		curTab = clicked.dataset.tab;
		// Activar tab
		serTabs.forEach((t) => t.classList.remove('services__tab--active'));
		clicked.classList.add('services__tab--active');
		openTab(curTab);
	}
});

/////////////////////////////////////////////////////////////////////
//Tabs contact
/*
const helpTabs = document.querySelectorAll('.help__tab');
const helpTabsContainer = document.querySelector('.help__tab-container');
const helpTabsContent = document.querySelectorAll('.help__content');
const helpTabsIcons = document.querySelectorAll('.help__icon');

let curTab = 0;
let needChange = false;

const closeTab = function () {
	document
		.querySelector(`.services__tab--${curTab}`)
		.classList.toggle('services__tab--active');
	document
		.querySelector(`.services__content--${curTab}`)
		.classList.toggle('services__content--active');
	document
		.querySelector(`.service__icon--${curTab}`)
		.classList.toggle('service__icon--active');
};

const openTab = function (tab) {
	// Activar contenido
	serTabsContent.forEach((c) =>
		c.classList.remove('services__content--active')
	);
	document
		.querySelector(`.services__content--${tab}`)
		.classList.add('services__content--active');

	// Activar icono
	serTabsIcons.forEach((i) => i.classList.remove('service__icon--active'));
	document
		.querySelector(`.service__icon--${tab}`)
		.classList.add('service__icon--active');
};

serTabsContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.services__tab');
	console.log(clicked);
	if (!clicked) return;
	if (clicked.dataset.tab == curTab) {
		// Cerrar tab si es la misma
		closeTab();
		serTabsIcons.forEach((i) => i.classList.remove('service__icon--active'));
		curTab = null;
	} else {
		curTab = clicked.dataset.tab;
		// Activar tab
		serTabs.forEach((t) => t.classList.remove('services__tab--active'));
		clicked.classList.add('services__tab--active');
		openTab(curTab);
	}
});
*/
/////////////////////////////////////////////////////////////////////
// Copiar email
const email = document.getElementById('email');
const buttonEmail = document.getElementById('btn-email');

buttonEmail.addEventListener('click', function () {
	navigator.clipboard.writeText(email.textContent);
});

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

const btnMobileEl = document.querySelector('.navigation-mobile');
const headerEl = document.querySelector('.header');

btnMobileEl.addEventListener('click', function () {
	headerEl.classList.toggle('navigation-open');
	document.body.classList.add('sticky');
});

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		const href = link.getAttribute('href');
		// Close mobile naviagtion
		if (link.classList.contains('navigation__link')) {
			console.log('hola');
			headerEl.classList.toggle('navigation-open');
		}
	});
});
