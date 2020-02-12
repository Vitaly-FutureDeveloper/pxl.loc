
//Клик на ссылку О НАС
$('#about_us').on('click', function(evt){
	evt.preventDefault();
	try{
		$('.page-header').toggleClass('page-header--glass');
		$('.glass-block').toggleClass('glass-block--closed glass-block--opened');

		$('.page-footer').toggleClass('page-footer--opened');
		$('.page-main__header-title').addClass('page-main__header-title--glass');
	} catch {
		console.log("Ошибка открытия о нас");
	}
});

//Клик на scroll
function scroll(evt){
	evt.preventDefault();
	try{

	if($('.glass-block').hasClass('glass-block--opened')){
			$('.page-header').removeClass('page-header--glass');
			$('.page-header').addClass('page-header--transparent');
	
			$('.glass-block').removeClass('glass-block--closed glass-block--opened');
			$('.glass-block').addClass('glass-block--closed');
	
			$('body').addClass('background--gradient');
			$('.page-footer__table').addClass('page-footer__table--closed');
			$('.page-main__header-title').removeClass('page-main__header-title--glass');
	
			$('.workers-block').removeClass('workers-block--closed');
			$('.workers-block').addClass('workers-block--opened');
	
			$('.page-footer__scroll-btn').addClass('page-footer__scroll-btn--black');
		}
		
	} catch {
		console.log("Классы уже переключены");
	}
}

$('.page-footer__scroll-btn').on('click', scroll);
$(window).scroll(scroll);