
$(document).ready(() => {
    $('.js--section-features').waypoint((direction) => {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
 
   $('.js--scroll-to-plans').click(() => {
       $('html,body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
   });

   $('.js--scroll-to-start').click(() => {
       $('html,body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });


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

   

    $('.js--nav-icon').click(() => {
        const nav = $('.js--main-nav');
        const icon = $('.js--nav-icon i');
    
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

   

    const map = new GMaps({ 
        div: '.map',
        lat: 38.7436266,
        lng: -9.05,
        zoom: 12
    });

    map.addMarker({
        lat: 38.7436266,
        lng: -9.1602037,
        title: 'Lisbon',
        infoWindow: {
            content: '<p>Our Lisbon HQ</p>'
          }
    });
});
