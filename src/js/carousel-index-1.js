$('.section_two-carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        adaptiveHeight: true,
        variableWidth: true,
        arrows: true,
        mobileFirst: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        speed: 200,
        nextArrow: '<img class="half-circle-next" src="img/icons/half-circle-next.png">',
        prevArrow: '<img class="half-circle-prev" src="img/icons/half-circle-prev.png">'
      }
    }
  ]
});