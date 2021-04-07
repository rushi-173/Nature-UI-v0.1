// --------------------------------------------------------------------------------
// Nav animation
const hamburgerEl = document.querySelector(".hamburger-menu");
const menuEl = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");

//functions
const hamburgerClickHandler = () => {
	if (hamburgerEl.classList.contains("click")) {
		hamburgerEl.classList.remove("click");
		menuEl.classList.remove("show-menu");
		menuEl.classList.add("hide-menu");
	} else {
		hamburgerEl.classList.add("click");
		menuEl.classList.remove("hide-menu");
		menuEl.classList.add("show-menu");
	}
};

const menuHandler = () => {
	hamburgerEl.classList.remove("click");
	menuEl.classList.remove("show-menu");
	menuEl.classList.add("hide-menu");
};

//EventListeners
hamburgerEl.addEventListener("click", hamburgerClickHandler);

menuItems.forEach(function (elem) {
	elem.addEventListener("click", menuHandler);
});

//---------------------------------------------------------------------------------
