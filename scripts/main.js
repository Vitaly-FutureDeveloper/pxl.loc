/* ОГЛАВЛЕНИЕ */
// 7 - 78 - Функции для переходов по страницам
// 80 - 85 - Функции для подключения анимаций
// 90 -130 - Функции для слайдеров
// 130 - 165 - События: нажатий, скролов
// 167 - 190 - Смена слайдеров по скроллу
// 212 - 215 - Отладочные функции (раскомментировать)

//Функция очистки Экрана
function cleaner(){
	$('.page-header').removeClass('page-header--glass page-header--transparent');
	$('.page-main__header-title').removeClass('page-main__header-title--glass page-main__header-title--workers');

	$('.glass-block').addClass('glass-block--closed');
		$('.glass-block').removeClass('glass-block--opened');

	$('body').removeClass('background--gradient');
	$('.page-footer__table').removeClass('page-footer__table--closed');

	$('.page-footer__scroll-btn').removeClass('page-footer__scroll-btn--black');

	$('.workers-block').addClass('workers-block--closed');
		$('.workers-block').removeClass('workers-block--opened');
}
//Клик на scroll
function scroll(){
	//evt.preventDefault();
	try{
	if( $('.glass-block').hasClass('glass-block--opened') ){

		cleaner();

			$('.page-header').addClass('page-header--transparent');

			$('.glass-block').addClass('glass-block--closed');
	
			$('body').addClass('background--gradient');
			$('.page-footer__table').addClass('page-footer__table--closed');

			$('.workers-block').removeClass('workers-block--closed');
			$('.workers-block').addClass('workers-block--opened');

			$('.page-footer__scroll-btn').addClass('page-footer__scroll-btn--black');
		}

	} catch {
		console.log("Классы уже переключены");
	}
}

//Клик на ссылку О НАС
function glassOpen(evt){
	evt.preventDefault();
	try{
		cleaner();

		$('.page-header').addClass('page-header--glass');

		$('.page-main__header-title').addClass('page-main__header-title--glass');

		$('.glass-block').removeClass('glass-block--closed');
		$('.glass-block').addClass('glass-block--opened');

		$('.page-footer').addClass('page-footer--opened');
	} catch {
		console.log("Ошибка открытия о нас");
	}
}

//Обраотка открытия/закрытия окна видео
function videoOpen(){
	$('.video-popup').addClass('video-popup--opened');
	$('.video-popup').fadeTo('1200ms', 1);
}
function videoClose(){
	$('.video-popup').fadeOut();
	setTimeout( () =>
		$('.video-popup').removeClass('video-popup--opened'), 1000
	);
}

//Анимации
function animateText(){
	$('.worker__slider p, .worker__slider h3, .worker__slider-text-wrap p')
		.addClass('shadow-anim');
}

//Слайдеры
var sliderIndex = 1;
var slides = $('.worker__slider');
var sliderButtonsWrap = $('.workers-block--toggles');
var sliderButtons = $('.workers-block__button-wrapper');

function showSlides(n, delegate=false){

	if(n > slides.length){
		sliderIndex = 1;
	}
	if(n < 1){
		sliderIndex = slides.length;
	}

	//sliderButtons.removeClass('workers-block__button-wrapper--active');
	//Удалена пробная версия, которая отключает все кнопки, перед запуском

	slides.removeClass('worker__slider--active');

	if(sliderIndex <= 1){
		setTimeout( () => sliderButtons[sliderIndex - 0].classList.add('workers-block__button-wrapper--active'), 300 );
	} else if (sliderIndex > 1 && delegate != true) {
		setTimeout( () => sliderButtons[sliderIndex - 1].classList.remove('workers-block__button-wrapper--active'), 300 );
	}

	slides[sliderIndex - 1].classList.add('worker__slider--active');
	

	if(delegate != true) // При нажатии на "сотрудника" - фиксит баг с излишним перебором
		setTimeout( () => sliderButtons[sliderIndex + 1].classList.add('workers-block__button-wrapper--active'), 700 );
	setTimeout( () => sliderButtons[sliderIndex + 2].classList.add('workers-block__button-wrapper--active'), 1200 );
}

function plusSlides(n){
	showSlides(sliderIndex += n);
		//animateText();
}

function currentSlide(n, delegate=false){
	showSlides(sliderIndex = n, delegate);
		animateText();
}

//События//
$('#about_us').on('click', glassOpen);

$('.glass-block__rewiews-video').on('click', videoOpen);
$('.video-popup--close-toggle').on('click', videoClose);

$('.page-footer__scroll-btn').on('click', function(){
	scroll();
	showSlides();
});

$(window).scroll(function(){
	if( $('.glass-block').hasClass('glass-block--opened') && pageYOffset > 170 ){
		scroll();
		showSlides();
	}
});

$('.page-footer__scroll-btn').on('click', () => plusSlides(1));

sliderButtonsWrap.on('click', function(evt){
	for(let i = 0; i < sliderButtons.length + 1; i++){
		if( evt.target.classList.contains('slider-button-img') &&
			evt.target == $('.slider-button-img')[i - 1]){
			currentSlide(i, true); //true - для запрета удаления первой кнопки переключения

				evt.target.classList.add('workers__button--off-animate');

			//Удаление кнопки на которую произведён клик
			setTimeout( () =>
				evt.target.offsetParent.classList.remove('workers-block__button-wrapper--active'), 
			2000);
		}
	}
});

$(window).scroll(function(){
	//Отрубаем выполнение, если мы не на странице
	if( $('.workers-block').hasClass('workers-block--closed')){	
		//console.log(pageYOffset);
		if(pageYOffset <= 200 && pageYOffset >= 170 && sliderIndex != 1)
			currentSlide(1);
		else if(pageYOffset >= 250 && sliderIndex != 2)
			currentSlide(2);
		else if(pageYOffset >= 300 && sliderIndex != 3)
			currentSlide(3);
		else if(pageYOffset >= 400 && sliderIndex != 4)
			currentSlide(4);
		else if(pageYOffset >= 470 && sliderIndex != 5)
			currentSlide(5);
		else if(pageYOffset >= 500 && sliderIndex != 6)
			currentSlide(6);
		else if(pageYOffset <= 580 && sliderIndex != 7)
			currentSlide(7);
		else if(pageYOffset >= 620 && sliderIndex != 8)
			currentSlide(8);
		else if(pageYOffset >= 700 && sliderIndex != 9)
			currentSlide(9);
	}	
});


/*
//Наведение мыши на закрыть видео НЕ ПОЛУЧИЛОСЬ
$('.video-popup--close-toggle').mouseover(
	() => $('.video-popup--close-toggle').addClass('video-popup--close-toggle--unhover')
);

/*hover(
	function(){
		$('.video-popup--close-toggle').removeClass('video-popup--close-toggle--unhover');
	},
	function(){ 
		$('.video-popup--close-toggle').addClass('video-popup--close-toggle--unhover');
		/*setTimeout( () => 
			$('.video-popup--close-toggle').removeClass('video-popup--close-toggle--unhover'),
		1500);
	}
);
*/

//mock Отладка страниц glass-block и слайдеров, чтоб вручную не переключать
//$('#about_us').click();
//$('.page-footer__scroll-btn').click();
