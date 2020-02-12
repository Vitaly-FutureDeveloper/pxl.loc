
//Клик на ссылку О НАС
$('#about_us').on('click', function(evt){
	evt.preventDefault();
	try{
		$('.page-header').toggleClass('page-header--glass');
		$('.glass-block').toggleClass('glass-block--closed glass-block--opened');
		//$('body').removeClass('background--gradient');
		$('.page-footer').toggleClass('page-footer--opened');
		$('.page-main__header-title').addClass('page-main__header-title--glass');
	} catch {
		console.log("Ошибка открытия о нас");
	}
});

//Клик на scroll
$('.page-footer__scroll-btn').on('click', function(evt){
	evt.preventDefault();
	try{
		$('.page-header').removeClass('page-header--glass');
		$('.page-header').addClass('page-header--transparent');

		$('.glass-block').removeClass('glass-block--closed glass-block--opened');
		$('.glass-block').addClass('glass-block--closed');

		$('body').addClass('background--gradient');
		$('.page-footer').toggleClass('page-footer--opened');
		$('.page-main__header-title').removeClass('page-main__header-title--glass');

		$('.workers-block').removeClass('workers-block--closed');
		$('.workers-block').addClass('workers-block--opened');
	} catch {
		console.log("Классы уже переключены");
	}
});