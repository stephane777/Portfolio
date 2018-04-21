$(document).ready(function(){
  /* STICKY NAVIGATION AND WAYPOINT*/
  $('.js--about').waypoint(function(direction){
    if (direction == "down" ){
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, { 
      offset: '70px;'
  })
            $('.bar').click(function(){
                $('nav .menu ul').toggleClass('active');
            })

/* SMOOTH SCROLLING*/

            $('a[href*="#"]')
  // Remove links that don't actually link to anything
  

/*
var waypoint = new Waypoint({
  element: document.getElementById('px-offset-waypoint'),
  handler: function(direction) {
    notify('I am 20px from the top of the window')
  },
  offset: 20 
})

*/

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

  var map;
  $(document).ready(function(){
    map = new GMaps({
      el: '#map',
      lat: 51.5098942,
      // lng: 1.1486348,
      lng : -0.05,
      zoomControl : true,
      zoomControlOpt: {
          style : 'SMALL',
          position: 'TOP_LEFT'
      },
      panControl : false,
      streetViewControl : false,
      mapTypeControl: false,
      overviewMapControl: false
    });
     map.setZoom(13);
  });
//   var map = new GMaps({
//     div: '.map',
//     lat: 51.5098942, /* 51.5098942,-0.1486348 */
//     lng: -0.1486348
// });



// map.addMarker({
// lat: 51.5098942,
// lng: -0.148990,
// title: 'London',
// infoWindow: {
// content: '<p>Our London headquarters</p>'
// }
// });


var marker = new google.maps.Marker({
  lat: 51.5098942,
  lng: -0.148990,
  map: map,
  title: 'Hello World!'
});


        })
