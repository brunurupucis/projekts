/*eslint max-len: [2, 400, 4]*/
/* eslint-disable no-undef*/
$(document).ready(() => {
    /* to show up sticky navigation */
    $('.js--section-features').waypoint((direction) => { /* direction knows if you scrolling up or down */
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
   /* Scroll on buttons*/
   $('.js--scroll-to-plans').click(() => {
       $('html,body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
   });

   $('.js--scroll-to-start').click(() => {
       $('html,body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });


    /* navigation scroll*/

/*$(function() { full with mistakes, needs to check for myself and test
        $(‘a[href*=#]:not([href=#])’).click(function() {
            if (location.pathname.replace(/^\//,”) == this.pathname.replace(/^\//,”) && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $(‘[name=’ + this.hash.slice(1) +’]’);
                if (target.length) {
                    $(‘html,body’).animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    */
    $(() => {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
      /* animations on scroll*/
    $('.js--wp-1').waypoint(() => {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%' 
    });
    
    $('.js--wp-2').waypoint(() => {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%' 
    });
    
    $('.js--wp-3').waypoint(() => {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%' 
    });
    
    $('.js--wp-4').waypoint(() => {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%' 
    });

    /* mobile navigation*/

    $('.js--nav-icon').click(() => {
        const nav = $('.js--main-nav');
        const icon = $('.js--nav-icon i');
    
        nav.slideToggle(200); /* change menu icon to x and back*/
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    /* Maps */ 

    const map = new GMaps({ /* coordinates */
        div: '.map',
        lat: 38.7436266,
        lng: -9.05,
        zoom: 12
    });

    map.addMarker({ /* markers*/
        lat: 38.7436266,
        lng: -9.1602037,
        title: 'Lisbon',
        infoWindow: {
            content: '<p>Our Lisbon HQ</p>'
          }
    });
});
