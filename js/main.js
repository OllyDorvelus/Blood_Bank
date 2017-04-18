//$(document).ready(function() {

//});

/*$(window).scroll(function(){
  if($('.navbar').offset().top > 199) {
    $('.navbar').addClass('navbar-fixed-top');
    //$('.navbar-fixed-top').addClass('top-nav-collapse');

  } else {
    //  $('.navbar').removeClass('top-nav-collapse');
      $('.navbar').removeClass('navbar-fixed-top');
  }
}); */


$(function(){
  $('.page-scroll a').bind('click', function(){
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
  });
});
