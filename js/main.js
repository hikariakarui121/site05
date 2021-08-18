$(function(){
  $("#slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow:3,
    centerMode: true,
    centerPadding:'130px',
    arrows:false,
  });
});

$('.faq-title').on('click', function(){
  $(this).toggleClass('active');
  $(this).next().slideToggle();
});

new WOW().init();


