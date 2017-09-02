document.addEventListener("DOMContentLoaded", function (event) {
	//Mobile menu function
	var menu 			= document.getElementById('header__menu'),
		mobilemenu 		= document.getElementById('mobile-nav__menu'),
		burger 			= document.getElementsByClassName('burger'),
		JSinit 			= document.getElementById('js_mobile-nav'),
		activeClass 	= 'open',
		open			= function () {
							JSinit.classList.add(activeClass);
						},
		close 			= function () {
							JSinit.classList.remove(activeClass);
						},
		toggle 			= function () {
							JSinit.classList.contains(activeClass) ? close() : open();
						};

	if (mobilemenu.innerHTML == 0)
		mobilemenu.innerHTML = menu.innerHTML;

	for (var i = 0; i < burger.length; i++) {
			burger[i].addEventListener('click', toggle);
		}

});