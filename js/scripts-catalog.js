/* Всплывающее окно товара */

var basket = document.querySelector(".catalog-items");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

if (basket){
basket.addEventListener("click", function(event) {
	var target = event.target;
	event.preventDefault();
		if (target.classList.contains("buy")) {
	 popup.classList.add("modal-content-show");
		}
	});
}

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});
