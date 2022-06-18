var typed = new Typed('.element', {
  strings: ['designer', 'developer'],
 
  typeSpeed: 700,
  // smartBackspace: true, // Default value
  loop: true,
  
   showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  backSpeed: 700,
});
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});

// progress bar link==============================================================
$('.circlechart').circlechart();

// mixitup========================================================================
var mixer = mixitup('.mixitup');

