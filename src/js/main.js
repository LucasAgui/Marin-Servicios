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
