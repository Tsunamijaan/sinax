(function ($) {
    "use strict";

//    =====Menu-sticky-activation-here========
    /* TOP Menu Stick  */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('#sticky-header').addClass("sticky");
        }
        else {
            $('#sticky-header').removeClass("sticky");
        }
    });


//=====onepage-Nav-section-start-here======

//$('.one-page-nav').onePageNav({
//    scrollSpeed:2000,
//    easing:'swing',
//});



//====slider-active====
    $('.slider-active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: false,
        arrows: true,
    });

//    ========testimona-active=======

    $('.testimonial-active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: false,
        arrows: true,
    });



//=====masonary-active=====
    $('.project-list').masonry({
        // options


    });


//====partner-area==========
    $('.partner-active').owlCarousel({
        items: 6,
        loop: true,
        nav: false,
        autoplay: true,
        smartSpeed: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }

    });


//=====humber-menu-active-here=====

    $('.humber-menu-1').on('click', function () {
        $('.sidebar').toggleClass('open');
    });

//=====humber-menu-active-here=====
    $('.hamburger ').on('click', function () {
        $('.hamburger--collapse').toggleClass('is-active');
    });


//=======mobile-menu-active-start-here==========
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });




    /* ====scroll-up-jquiry-plugin-start==== */

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 1000, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationSpeed: 200, // Animation speed (ms)
        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
        scrollText: '<i class="ti-angle-double-up"></i>', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required.
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });



//===========Smmoth-scrol-jquirey=========

    $(".smooth a").bind('click', function (event) {
        $(this).parent().addClass('active').siblings().removeClass('active');
        var $anchor = $(this);
        var headerH = '0';

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1000, 'easeOutExpo');
        event.preventDefault();
    });
    $('#brandi').scrollspy();



 


})(jQuery);	