
$(window).on('load resize', () => {
  const ww = $(window).width();
  const sw = 1000;
  const centerPadding = Math.max((ww - sw) / 2, 60) + 'px';
  $('.slider').slick('slickSetOption', {
    centerPadding: centerPadding,
  });
});
$('.slider').slick({
  autoplay:true,
  autoplaySpeed:5000,
  centerMode:true,
  centerPadding:0,
  slidesToShow:1,
  dots: true
});
