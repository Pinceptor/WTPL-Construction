$(document).ready(function(){
  $('.testominials--slider').slick({
    autoplay: true,
    centerPadding: 0,
    arrows: false,
    slide: '.testominials--slider--content',
    slidesToShow: 3,
    centerMode: true,
    swipeToSlide: true
  });
});