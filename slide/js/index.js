// console.log($('.nav-btn'))
// console.log($('#Btn1, #Btn2, #Btn3, #Btn4, #Btn5, #Btn6'));
// console.log($('#Nav .nav-btn'))
const $Nav = $('#Nav');
const $NavBtns = $Nav.find('.nav-btn');
const $SlideLs = $('#SlideLs');
const isMobile = $(window).width() <= 480;

console.log(isMobile);

// console.log($(window).width());

$NavBtns.eq(0).addClass('js-nav-btn');

$('#Btn1').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;

	if (isMobile) {
		$Nav.removeClass('js-nav');
	}

	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');

	$SlideLs.css({
		top: 0,
		left: 0
	});
});

$('#Btn2').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;

	if (isMobile) {
		$Nav.removeClass('js-nav');
	}
	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');
	$SlideLs.css({
		top: 0,
		left: '-100vw',
	});
});

$('#Btn3').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;
	if (isMobile) {
		$Nav.removeClass('js-nav');
	}
	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');
	$SlideLs.css({
		top: 0,
		left: '-200vw',
	});

});

$('#Btn4').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;
	if (isMobile) {
		$Nav.removeClass('js-nav');
	}
	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');
	$SlideLs.css({
		top: 0,
		left: '-300vw',
	});

});

$('#Btn5').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;
	if (isMobile) {
		$Nav.removeClass('js-nav');
	}
	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');
	$SlideLs.css({
		top: 0,
		left: '-400vw',
	});

});

$('#Btn6').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;
	if (isMobile) {
		$Nav.removeClass('js-nav');
	}
	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');
	$SlideLs.css({
		top: 0,
		left: '-500vw',
	});

});
$('#Btn7').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;
	if (isMobile) {
		$Nav.removeClass('js-nav');
	}
	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');
	$SlideLs.css({
		top: '-100vh',
		left: 0,
	});

});
$('#Btn8').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;
	if (isMobile) {
		$Nav.removeClass('js-nav');
	}
	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');
	$SlideLs.css({
		top: '-100vh',
		left: '-100vw',
	});

});
$('#Btn9').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;
	if (isMobile) {
		$Nav.removeClass('js-nav');
	}
	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');
	$SlideLs.css({
		top: '-100vh',
		left: '-200vw',
	});

});
$('#Btn10').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;
	if (isMobile) {
		$Nav.removeClass('js-nav');
	}
	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');
	$SlideLs.css({
		top: '-100vh',
		left: '-300vw',
	});

});
$('#Btn11').click(function () {
	if ($(this).hasClass('js-nav-btn')) return;
	if (isMobile) {
		$Nav.removeClass('js-nav');
	}
	$(this)
		.addClass('js-nav-btn')
		.siblings().removeClass('js-nav-btn');
	$SlideLs.css({
		top: '-100vh',
		left: '-400vw',
	});

});

// ----------------------------------
if (isMobile) {
	$SlideLs.find('.slide-item').scroll(function () {
		const dY = $(this).scrollTop()
		if (dY === 0) {
			$Nav.removeClass('js-nav');
		} else {
			$Nav.addClass('js-nav');
		}
	});
}

// Fancybox =================================
$('.pd-item > a').fancybox({
	protect: true,
	loop: true,
	animationDuration: 500,
	transitionDuration: 500,
	transitionEffect: 'rotate',
	// keyboard: false,
	// fullScreen: {
	// 	autoStart: true,
	// },
	// infobar: false,
	// toolbar: false,
	smallBtn: false,
	// arrows: false,
	// slideShow: {
	// 	autoStart: true,
	// 	speed: 500,
	// },
	thumbs: {
		autoStart: true,
	},
	buttons: [
		'zoom',
		'share',
		'slideShow',
		'fullScreen',
		'download',
		'thumbs',
		'close'
	],
	media: {
		youtube: {
			params: {
				autoplay: false,
			},
		}
	}
});