$(document).ready(function(){ // Когда Document готов то надо выпонять:
    /* var firstNumber = prompt("Введите первое число"); 
    var secondNumber = prompt("Введите второе число"); 
    var total = Number(firstNumber) + Number(secondNumber); 
    alert ("Введите второе число", total); */
    //Слайдер
    alert("Сайт находиться в процессе разработки");
    $('.carousel__inner').slick({
        speed: 800,
        adaptiveHeight: true,
        dots: true,
        prevArrow:'<img class="slick-prev" src="img/left.png">',
        nextArrow:'<img class="slick-next" src="img/right.png">',
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

    $('.carousel1__inner').slick({
        speed: 800,
        adaptiveHeight: true,
        dots: true,
        prevArrow:'<img class="slick-prev1" src="img/left.png">',
        nextArrow:'<img class="slick-next1" src="img/right.png">',
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

    $('.carousel2__inner').slick({
        speed: 800,
        adaptiveHeight: true,
        dots: true,
        prevArrow:'<img class="slick-prev1" src="img/left.png">',
        nextArrow:'<img class="slick-next1" src="img/right.png">',
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

    $('.carousel3__inner').slick({
        speed: 800,
        adaptiveHeight: true,
        dots: true,
        prevArrow:'<img class="slick-prev1" src="img/left.png">',
        nextArrow:'<img class="slick-next1" src="img/right.png">',
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



    new WOW().init();



    
});