$('.scroll').on('click', function(e){
	
	var dest = $(this).attr('href');
	var elementDest = $(dest);

	$('html, body').animate({
		scrollTop: elementDest.offset().top - 50
	},1250, 'easeInOutExpo');

	e.preventDefault();


});