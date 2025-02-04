

$(function () {
  $('.gallery__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.gallery-list-left',
    nextArrow: '.gallery-list-right',
  });
});


$(function () {
  $('.faq-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.faq-list-left',
    nextArrow: '.faq-list-right',
  });
});







