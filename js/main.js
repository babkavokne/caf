$(function(){

  $('.slider').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    centerPadding: '400px',
    focusOnSelect: true,
  });

  $('.about-festival__slider').slick({
    arrows: false,
    asNavFor:'.about-festival__dots',
    draggable: false,
  });
  $('.about-festival__dots').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.about-festival__slider',
    centerMode: true,
    focusOnSelect: true
   });

});
