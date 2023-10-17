/////////////////////////////////////////////////////////////////////
//Tabs
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
