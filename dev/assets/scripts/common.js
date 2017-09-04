document.addEventListener("DOMContentLoaded", function (event) {
	//Mobile menu function
	var menu 			= document.querySelector('#header__menu'),
		mobilemenu 		= document.querySelector('#mobile-nav__menu'),
		JSinit 			= document.querySelector('#js_mobile-nav'),
		burger 			= document.querySelectorAll('.burger'),
		activeClass 	= 'open';
	function open() { 
		JSinit.classList.add(activeClass); 
	}
	function close() {
		JSinit.classList.remove(activeClass);
	}
	function toggle() {
		JSinit.classList.contains(activeClass) ? close() : open();
	}
	if (mobilemenu.innerHTML == 0)
		mobilemenu.innerHTML = menu.innerHTML;

	/* for (var i = 0; i < burger.length; i++) {
			burger[i].addEventListener('click', toggle);
		} */
	for (var i = 0; i < burger.length; i++) {
		burger[i].onclick = toggle;
		};
});
