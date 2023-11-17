


//при клике на бургер-кнопку сама кнопка меняется/появляется меню
$(function () {
    $('.burger-button').click(function () {
        $(this).toggleClass('active');
        $('.main-title-ghost').toggleClass('active');
        $('body').toggleClass('lock');
        $('.mobile-menu').toggleClass('active');
        if ($('.mobile-menu').hasClass('active')) {
            $('body').addClass('lock');
        } else {
            $('body').removeClass('lock');
        }
    });
});

//при клике на кнопку КУПИТЬ - появляется меню покупки
$(function () {
    $('.buy-book__button').click(function (event) {
        event.stopPropagation(); // Остановить всплытие события, чтобы клик не попал на документ сразу после клика на кнопку
        $('.buy-book__options').toggleClass('show');
    });

    $(document).click(function (event) {
        var $target = $(event.target);
        if (!$target.closest('.buy-book__button').length && !$target.closest('.buy-book__options').length) {
            // Если клик был сделан вне кнопки КУПИТЬ и вне меню покупки, скрыть меню
            $('.buy-book__options').removeClass('show');
        }
    });
});

//текст лейбла занимает место над полем при фокусе на поле
$(function () {
    $('.form__input').on('focus blur', function () {
        var label = $(this).parent('.form__label');
        if ($(this).val() === '') {
            if (event.type === 'focus') {
                label.addClass('focused');
            } else if (event.type === 'blur') {
                label.removeClass('focused');
            }
        } else {
            label.addClass('focused');
        }
    });
});


//галерея с увеличением по клику, можно использовать на любой странице
$(function () {
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        retina: {
            ratio: 2, // Increase this number to enable retina image support.
            // Image in popup will be scaled down by this number.
            // Option can also be a function which should return a number (in case you support multiple ratios). For example:
            // ratio: function() { return window.devicePixelRatio === 1.5 ? 1.5 : 2  }
            replaceSrc: function (item, ratio) {
                return item.src.replace(/\.\w+$/, function (m) {
                    return '-2x' + m;
                });
            } // function that changes image source
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        },
        swipe: {
            enabled: true
        }
    });
});

$(function () {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

//слайдеры на главной странице
$(function () {
    //слик-слайдер заглавных фото на главной странице
    $('.hero__slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplaySpeed: 3500
        // autoplay: true
        // fade: true
    });

    $('.about__pictures').slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        arrows: true
    });

    //слик-слайдер партнеров на главной странице
    $('.partners__list').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        autoplay: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 5000
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //слик-слайдер отзывов на главной странице
    $('.reviews__inner').slick({
        dots: true,
        autoHeight: true,
        adaptiveHeight: true,
        arrows: true
    });
    // }


});

//активное состояние кнопки call-to-action
$(function () {
    $('.course-price__button').click(function () {
        $(this).toggleClass('active');
    });
});

//гармошка блока faq
$(function () {
    $('.course-faq__ans').hide();
    $('.course-faq__question').click(function () { //при клике на вопрос
        $(this).toggleClass('open'); //применяются стили текущего вопроса
        $(this).siblings('.course-faq__ans').slideToggle('slow', function () { //появляется ответ текущего вопроса
            $('.course-faq__ans').not(this).hide('slow'); //скрывается ответ НЕ текущего вопроса
            $('.course-faq__ans').not(this).prev('.course-faq__question').removeClass('open'); //НЕ текущий вопрос теряет стили открытого
        });
    });
});

//Плавный скролл до цен при нажатии на кнопку call-to-action. нужен только странице конкретного курса
$(function () {
    $(".course-hero__button").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 100
        }, 1500);
    });
});

//При клике на сабавтора на странице курса появляется popup об этом авторе
$(function () {

    $('.course-plan__module-subauthor-btn--maryna').click(function () {
        $('.subauthor-card--maryna').addClass('open');
        $(this).addClass('open');
        $('.backdrop').addClass('open');
        $('body').addClass('lock');
    });

    $('.course-plan__module-subauthor-btn--stanislav').click(function () {
        $('.subauthor-card--stanislav').addClass('open');
        $(this).addClass('open');
        $('.backdrop').addClass('open');
        $('body').addClass('lock');
    });

    $('.course-plan__module-subauthor-btn--katya').click(function () {
        $('.subauthor-card--katya').addClass('open');
        $(this).addClass('open');
        $('.backdrop').addClass('open');
        $('body').addClass('lock');
    });

    $('.course-plan__module-subauthor-btn--roman').click(function () {
        $('.subauthor-card--roman').addClass('open');
        $(this).addClass('open');
        $('.backdrop').addClass('open');
        $('body').addClass('lock');
    });

    $('.course-plan__module-subauthor-btn--taras').click(function () {
        $('.subauthor-card--taras').addClass('open');
        $(this).addClass('open');
        $('.backdrop').addClass('open');
        $('body').addClass('lock');
    });

    $('.course-plan__module-subauthor-btn--oleksandra').click(function () {
        $('.subauthor-card--oleksandra').addClass('open');
        $(this).addClass('open');
        $('.backdrop').addClass('open');
        $('body').addClass('lock');
    });

    $('.course-plan__module-subauthor-btn--illia').click(function () {
        $('.subauthor-card--illia').addClass('open');
        $(this).addClass('open');
        $('.backdrop').addClass('open');
        $('body').addClass('lock');
    });

    $('.course-plan__module-subauthor-btn--yana').click(function () {
        $('.subauthor-card--yana').addClass('open');
        $(this).addClass('open');
        $('.backdrop').addClass('open');
        $('body').addClass('lock');
    });

    $('.course-plan__module-subauthor-btn--iryna').click(function () {
        $('.subauthor-card--iryna').addClass('open');
        $(this).addClass('open');
        $('.backdrop').addClass('open');
        $('body').addClass('lock');
    });

    $('.course-reviews__inner').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });



    $(document).mouseup(function (e) { // отслеживаем клик
        var block = $(".subauthor-card"); //кнопка, меню В ней
        if (!block.is(e.target) && block.has(e.target).length === 0) { //если клик не по кнопке/меню/чайлдам
            $('.course-plan__module-subauthor-btn').removeClass('open'); //кнопка неактивна
            $('.subauthor-card').removeClass('open'); //меню неактивно
            $('.backdrop').removeClass('open'); //бекдроп неактивен
            $('body').removeClass('lock');
        }
    });
    $('.subauthor-card__close-btn').click(function () {
        $('.course-plan__module-subauthor-btn').removeClass('open'); //кнопка неактивна
        $('.subauthor-card').removeClass('open'); //меню неактивно
        $('.backdrop').removeClass('open'); //бекдроп неактивен
        $('body').removeClass('lock');
    });
});

var mixer = mixitup('.exhibitions__grid, .bookstore__grid');

// Назначаем обработчик на все кнопки с классом .filter__button
$('.exhibitions .filter__button').click(function () {

    var filterValue = $(this).data('filter');
    // Добавляем класс .active на нажатую кнопку и удаляем этот класс у других кнопок
    $(this).addClass('active').parent().siblings().find('.exhibitions .filter__button').removeClass('active');
    // Удаляем текущее фоновое изображение и добавляем новое, соответствующее нажатой кнопке
    $('.exhibitions__grid').removeClass('bg-ukr bg-de bg-neth bg-norv bg-usa bg-aust bg-hung bg-geor bg-fr bg-it bg-pl').addClass('bg-' + $(this).data('filter').substr(1));
});

$(".dataYear").on("click", function() {
    $(".exhibitions__grid-item").addClass("hideYear");
});

$("[data-filter=\"all\"]").on("click", function() {
    $(".exhibitions__grid-item").removeClass("hideYear");
});