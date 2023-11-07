(function ($) {
    "use strict";

    /*----------------------------
       		Preloader Active
       	------------------------------*/

    $(window).on('load', function () {
        $(".preloader").fadeOut(500);
    });

    /*----------------------------
       		Sticky Header Active
       	------------------------------*/

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 2) {
            $(".khalif-main-manu-content").removeClass("sticky");
        } else {
            $(".khalif-main-manu-content").addClass("sticky");
        }
    });

    /*----------------------------
        		Brand Active
        	------------------------------*/

    $(".all-brand").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    /*----------------------------
        		team Active
        	------------------------------*/

    $(".khalif-all-team-area").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        center:true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    /*---------------------
    	// popup2 active
    --------------------- */
    $('.popup-team').magnificPopup({
        type: 'image'
    });
    /*----------------------------
        		   isotop active
        	------------------------------*/
    $('.portfolio-menu-wrape li').on('click', function () {
        $('.portfolio-menu-wrape li.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#container').imagesLoaded(function () {
        $('.portfolio-menu-wrape li').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $folios2.isotope({
                filter: filterValue
            });
        });
        var $folios2 = $('.portfolio-all-items').isotope({
            itemSelector: '.single-portfolio-item',
            percentPosition: true,
            transitionDuration: '0.9s',
            // only opacity for reveal/hide transition
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.single-portfolio-item'
            },
        });
    });
    /*---------------------
    	// popup2 active
    --------------------- */
    $('.portfolio-pop a').magnificPopup({
        type: 'image'
    });


    /*----------------------------
        		testimonial Active
        	------------------------------*/

    $(".all-testimonial").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    /*----------------------------
        		Brand Active
        	------------------------------*/

    $(".khalif-all-blog-list").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    /*----------------------------
       		Sticky Header Active
       	------------------------------*/

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 2) {
            $(".header-top-menu-area").removeClass("sticky");
        } else {
            $(".header-top-menu-area").addClass("sticky");
        }
    });

    /*----------------------------
    		Video popup active
    	------------------------------*/

    $(".popup-video").magnificPopup({
        type: "iframe"
    });

    /*----------------------------
    		Counter Active
    	------------------------------*/

    $('.counter').counterUp({
        delay: 2,
        time: 1000
    });

    /*----------------------------
       		Blog Slider Active
       	------------------------------*/
    $(".blog-img-slider").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*----------------------------
    		Magic Mouse Active
    	------------------------------*/
    magicMouse({
        "outerStyle": "circle",
        "hoverEffect": "circle-move",
        "hoverItemMove": false,
        "defaultCursor": false,
        "outerWidth": 30,
        "outerHeight": 30
    });

    /*----------------------------
    		button tilt Active
    	------------------------------*/
    $('.btn-tilt').tilt({
        scale: 1.1,
    });

    /*----------------------------
       		search form Active
       	------------------------------*/

    $('#close-btn').on('click', function () {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').on('click', function () {
        $('#search-overlay').fadeIn();
    });

    /*----------------------------
        		AOS active
        	------------------------------*/

    AOS.init();

})(jQuery);