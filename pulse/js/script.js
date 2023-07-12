$(document).ready(function(){ // Когда Document готов то надо выпонять:
    
    //Слайдер

    $('.carousel__inner').slick({
        speed: 800,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/screen4/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/screen4/right.png"></button>',
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    //Перепещение между табами

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    //Назад и вперед (описание)

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    
    toggleSlide('.catalog-item__back');


    //Модальные окна

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });



    //Формы (заполнение)

    function validateForms(form){
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите своё имя",
                phone: "Пожалуйста, ввeдите свой телефон",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Пожалуйста, введите настоящую почту"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');



    $('input[name=phone]').mask("+7 (999) 999-99-99");


    
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });




    new WOW().init();



    
});