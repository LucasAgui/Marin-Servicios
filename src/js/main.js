/////////////////////////////////////////////////////////////////////
//Tabs products
const tabs = document.querySelectorAll('.products-tab');
const tabsContainer = document.querySelector('.products-tab-container');
const tabsContent = document.querySelectorAll('.products-content');

tabsContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.products-tab');
	console.log(clicked);
	if (!clicked) return;

	// Activar tab
	tabs.forEach((t) => t.classList.remove('products-tab--active'));
	clicked.classList.add('products-tab--active');

	// Activar contenido
	tabsContent.forEach((c) => c.classList.remove('products-content--active'));
	document
		.querySelector(`.products-content--${clicked.dataset.tab}`)
		.classList.add('products-content--active');
});

/////////////////////////////////////////////////////////////////////
//Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider-btn--left');
const btnRight = document.querySelector('.slider-btn--right');

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
const serTabs = document.querySelectorAll('.services-tab');
const serTabsContainer = document.querySelector('.services-tab-container');
const serTabsContent = document.querySelectorAll('.services-content');
const serTabsIcons = document.querySelectorAll('.service-icon');
const serContentHolders = document.querySelectorAll('.content-holder');

let curTab = 0;
let needChange = false;

const closeTab = function () {
	document
		.querySelector(`.services-tab--${curTab}`)
		.classList.toggle('services-tab--active');
	document
		.querySelector(`.services-content--${curTab}`)
		.classList.toggle('services-content--active');
	document
		.querySelector(`.service-icon--${curTab}`)
		.classList.toggle('service-icon--active');

	console.log(needChange);
	if (needChange) {
		moveTabs(curTab);
		needChange = false;
	} else {
		moveTabs(-5);
		needChange = true;
	}
};

const moveTabs = function (tab) {
	console.log(tab);
	let indice = 0;
	serContentHolders.forEach((ch) => {
		if (indice == tab) {
			ch.style.transform = 'translateY(250px)';
		} else {
			ch.style.transform = 'translateY(0)';
			indice++;
		}
	});
};

const openTab = function (tab) {
	// Activar contenido
	serTabsContent.forEach((c) => c.classList.remove('services-content--active'));
	document
		.querySelector(`.services-content--${tab}`)
		.classList.add('services-content--active');

	// Activar icono
	serTabsIcons.forEach((i) => i.classList.remove('service-icon--active'));
	document
		.querySelector(`.service-icon--${tab}`)
		.classList.add('service-icon--active');

	moveTabs(tab);
};

serTabsContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.services-tab');
	if (!clicked) return;
	if (clicked.dataset.tab == curTab) {
		closeTab();
	} else {
		curTab = clicked.dataset.tab;
		// Cerrar tab si es la misma
		// Activar tab
		serTabs.forEach((t) => t.classList.remove('services-tab--active'));
		clicked.classList.add('services-tab--active');
		openTab(curTab);
	}

	// // Mover tabs
	// if (curTab == 1) {
	// 	serContentHolders[1].style.transform = 'translateY(250px)';
	// 	serContentHolders[2].style.transform = 'translateY(250px)';
	// 	serContentHolders[3].style.transform = 'translateY(250px)';
	// } else if (clicked.dataset.tab == 2) {
	// 	serContentHolders[1].style.transform = 'translateY(0)';
	// 	serContentHolders[2].style.transform = 'translateY(250px)';
	// 	serContentHolders[3].style.transform = 'translateY(250px)';
	// } else if (clicked.dataset.tab == 3) {
	// 	serContentHolders[1].style.transform = 'translateY(0)';
	// 	serContentHolders[2].style.transform = 'translateY(0)';
	// 	serContentHolders[3].style.transform = 'translateY(250px)';
	// } else if (clicked.dataset.tab == 4) {
	// 	serTabs[0].style.transform = 'translateY(0)';
	// 	serTabs[1].style.transform = 'translateY(0)';
	// 	serTabs[2].style.transform = 'translateY(0)';
	// }
});
