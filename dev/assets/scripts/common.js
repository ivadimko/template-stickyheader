document.addEventListener("DOMContentLoaded", function (event) {

	$(".header__nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top-$('.header__topline').height()
    });
});

	$(window).scroll(function(){
		if ($(window).scrollTop() >= $('.header__topline').height()) {
			$('.header__nav').hasClass('fixed') ? '' :
			(
				$('.header__nav').addClass('fixed'),
				$('.section').first()
					.css('transform', 'translateY(' + $('.header__nav').height() + 'px)')
				)
		}
		else {
			$('.header__nav').hasClass('fixed') ?
				($('.header__nav').removeClass('fixed'),
				$('.section').first()
					.css('transform', 'translateY(0)')) : ''
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
	$(document).on('click', '.mobile-nav__menu>li', function () {
			toggle();
		});
	console.log(mobilemenu);
}
