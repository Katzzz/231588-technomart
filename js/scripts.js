/* Всплывающее окно товара */

var basket = document.querySelector(".buy");
var popup = document.querySelector(".modal-item");
var close = popup.querySelector(".modal-content-close");

basket.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-item-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-item-show");
});

/* Всплывающее окно feedback */

var fb = document.querySelector(".fb-btn");
var feedback = document.querySelector(".feedback");
var closeFeedback = feedback.querySelector(".modal-content-close");
var nameInput = feedback.querySelector("[name=name]");
var emailInput = feedback.querySelector("[name=email]");
var form = feedback.querySelector("form");
var storage = localStorage.getItem("name");


fb.addEventListener("click", function(event) {
	event.preventDefault();
	feedback.classList.add("feedback-show");
	if (storage) {
		nameInput.value = storage;
		emailInput.focus();
	}
	else {
		nameInput.focus();
	}
});

closeFeedback.addEventListener("click", function(event) {
	event.preventDefault();
	feedback.classList.remove("feedback-show");
	feedback.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
	if (!nameInput.value || !emaiInput.value) {
		event.preventDefault();
		feedback.classList.remove("feedback-error");
		feedback.offsetWidth = feedback.offsetWidth;
		feedback.classList.add("feedback-error");
	}
	else {
		localStorage.setItem("name", nameInput.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (feedback.classList.contains("feedback-show")) {
			feedback.classList.remove("feedback-show");
			feedback.classList.remove("modal-error");
		}
	}
});

/* Всплывающее окно карты */

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains("modal-content-show")) {
			mapPopup.classList.remove("modal-content-show");
		}
	}
});
