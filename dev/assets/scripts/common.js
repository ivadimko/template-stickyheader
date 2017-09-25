document.addEventListener("DOMContentLoaded", function (event) {

	$('.menu__link').click(function(){
		var link = $(this).attr('href');
		$('html, body').animate({scrollTop:$(link).position().top}, 1000);
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() >= $('.header').height()) {
			$('.header__nav').hasClass('fixed') ? '' :
			(
				$('.header__nav').addClass('fixed'),
				$('.header__nav').fadeIn(),
				$(window).width() < 769 ? $('.header__nav').css('display', 'flex') : ''
				)
		}
		else {
			$('.header__nav').hasClass('fixed') ?
			(
				$('.header__nav').removeClass('fixed'),
				$('.header__nav').css('display', '')
				) : '';
		}
	});
	mobileNav();
});
window.onload = function() {

};
//Mobile menu function
function mobileNav() {
	var menu 			= document.querySelector('.header__menu'),
	mobilemenu 		= document.querySelector('.mobile-nav__menu'),
	JSinit 			= document.querySelector('.js_mobile-nav'),
	burger 			= document.querySelectorAll('.burger'),
	activeClass 	= 'open';
	function toggle() {
		JSinit.classList.toggle(activeClass);
	}
	if (mobilemenu.innerHTML == 0)
		mobilemenu.innerHTML = menu.innerHTML;
	for (var i = 0; i < burger.length; i++) {
		burger[i].onclick = toggle;
	};
}
