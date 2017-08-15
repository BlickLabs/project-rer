$('.section-four-carousel').slick({
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
        arrows: true,
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 1,
        nextArrow: '<div class="carousel-arrows rer-arrow-left"><img class="arrow-width-14px" src="img/icons/right-arrow.png"></div>',
        prevArrow: '<div class="carousel-arrows rer-arrow-right"><img class="arrow-width-14px" src="img/icons/left-arrow.png"></div>'
      }
    }
  ]
});