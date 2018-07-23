$(document).ready(function() {

    /* to show up sticky navigation */
    $('.js--section-features').waypoint(function(direction){ /* direction knows if you scrolling up or down */
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
   /* Scroll on buttons*/
   $('.js--scroll-to-plans').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
   });

   $('.js--scroll-to-start').click(function(){
    $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
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

   $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
});

});
