//Функция очистки Экрана
function cleaner(){
	$('.page-header').removeClass('page-header--glass page-header--transparent');
	$('.page-main__header-title').addClass('page-main__header-title--glass page-main__header-title--workers');

	$('.glass-block').addClass('glass-block--closed');
		$('.glass-block').removeClass('glass-block--opened');

	$('body').removeClass('background--gradient');
	$('.page-footer__table').removeClass('page-footer__table--closed');

	$('.page-footer__scroll-btn').removeClass('page-footer__scroll-btn--black');

	$('.workers-block').addClass('workers-block--closed');
		$('.workers-block').removeClass('workers-block--opened');
}

//Клик на scroll
function scroll(evt){
	evt.preventDefault();
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

		$('.page-footer').toggleClass('page-footer--opened');
	} catch {
		console.log("Ошибка открытия о нас");
	}
}

try{
    var slideIndex = 1,
        slides = document.querySelectorAll('.worker__slider'),
        dotsWrap = document.querySelector('.workers-block--toggles'),
        dots = document.querySelectorAll('.workers-block__button-wrapper--active button');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length)
            slideIndex = 1;
        if (n < 1)
            slideIndex = slides.length;

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'flex';
        slides[slideIndex - 1].classList.add('worker__slider--active');
        dots[slideIndex - 1].click();
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlides(n) {
        showSlides(slideIndex = n);
    }

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('workers-block__button-slider') && event.target == dots[i - 1]) {
                currentSlides(i);
            }
        }
    });


    setInterval(() => plusSlides(1), 8000);

} catch { 
    console.log('Ошибка или отсуствие слайдеров'); 
}

$('#about_us').on('click', glassOpen);
$('.page-footer__scroll-btn').on('click', scroll);
$(window).scroll(scroll);