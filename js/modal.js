var btnMapOpen = document.querySelector(".map");
var btnMapClose = document.querySelector(".modal-close-map");
var popupMap = document.querySelector(".modal-window-map");

var btnWriteOpen = document.querySelector(".button-contacts");
var btnWriteClose = document.querySelector(".modal-close-write");
var popupWrite = document.querySelector(".madal-window-write");


btnMapOpen.addEventListener("click", function(e) {
	e.preventDefault();
	popupMap.classList.add("modal-show");
});

btnMapClose.addEventListener("click", function(e) {
	e.preventDefault();
	popupMap.classList.remove("modal-show");
});

btnWriteOpen.addEventListener("click", function(e) {
	e.preventDefault();
	popupWrite.classList.add("modal-show");
});

btnWriteClose.addEventListener("click", function(e) {
	e.preventDefault();
	popupWrite.classList.remove("modal-show");
});

window.addEventListener("keydown", function(e) {
	if(e.keyCode === 27) {
		e.preventDefault();
		popupMap.classList.remove("modal-show");
		popupWrite.classList.remove("modal-show");
	}
});
