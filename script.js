$(document).ready(function(){
            $('.menu').click(function(){
                $('ul').toggleClass('active');
            })

            /* SMOOTH SCROLLING*/

            $('a[href*="#"]')
  // Remove links that don't actually link to anything
  
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          //$target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            //$target.focus(); // Set focus again
          };
        });
      }
    }
  });

  var map = new GMaps({
    div: '.map',
    lat: 51.5098942, /* 51.5098942,-0.1486348 */
    lng: -0.1486348
});

map.addMarker({
lat: 51.5098942,
lng: -0.148990,
title: 'London',
infoWindow: {
content: '<p>Our London headquarters</p>'
}
});

        })