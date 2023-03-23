/**

Initializes the jQuery functionality for the navigation bar including adding/removing CSS classes and event listeners.
A timer is set for 3 seconds to add the "small" CSS class to the navigation bar.
A scroll event listener is added to change the size of the navigation bar depending on the scroll position.
A click event listener is added to the navigation bar links to highlight the active link.
*/
$(document).ready(function(){
    setTimeout(function() {
      $('nav').addClass('small');
    }, 3000);
    
    $(window).scroll(function() {
      if ($(document).scrollTop() > 0) {
        $('nav').removeClass('large');
        $('nav').addClass('small');
      } else {
        $('nav').removeClass('small');
        $('nav').addClass('large');
      }
    });
    
    $('nav ul li a').click(function(){
      $('nav ul li a').removeClass('active');
      $(this).addClass('active');
    });
  });
  