$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/Arrowleft.png" alt="">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/Arrowright.png" alt="">',
        responsive: [
            {
              breakpoint: 481,
              settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
              }
            }
          ]
    });


    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });
});