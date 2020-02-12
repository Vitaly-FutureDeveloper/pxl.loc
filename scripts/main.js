$('#about_us').on('click', function(evt){
	evt.preventDefault();
	console.log(evt.target);
	try{
		$('.page-header').toggleClass('page-header--glass');
		$('.glass-block').toggleClass('glass-block--closed glass-block--opened');
		$('body').removeClass('background--gradient');
		$('.page-footer').toggleClass('page-footer--opened');
	} catch {
		console.log("Ошибка открытия о нас");
	}
});