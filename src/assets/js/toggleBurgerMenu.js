$('.header__menu-burger--btn').click(function () {
	$(this).toggleClass('open');
	$('.header__menu-burger').toggleClass('active');
	$('body').toggleClass('no-scroll');
});
