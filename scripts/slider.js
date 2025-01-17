// jQuery.noConflict();
$(document).ready(function () {
    $('.slider-images').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 2000,
    });

    $('.room-idea-slides').slick({
        arrows: false,
        dots: true,
        appendDots: '.ideas-slider-dots',
        dotsClass: 'dots',
        
        
        autoplay:true,
        infinite:true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],

    });
    $('.tips-tricks-slides').slick({
        arrows: false,
        dots: true,
        appendDots: '.tips-slider-dots',
        dotsClass: 'dots',
        
        
        autoplay:true,
        infinite:true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],

    });
});



