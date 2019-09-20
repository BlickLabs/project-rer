$('.section-four-carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 1,
        nextArrow: '<div class="why-rer-carousel-arrows why-rer-arrow-left"><img class="why-rer-arrow-width-14px" src="img/icons/right-arrow.png"></div>',
        prevArrow: '<div class="why-rer-carousel-arrows why-rer-arrow-right"><img class="why-rer-arrow-width-14px" src="img/icons/left-arrow.png"></div>'
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 1,
        nextArrow: '<div class="why-rer-carousel-arrows why-rer-arrow-left"><img class="why-rer-arrow-width-14px" src="img/icons/right-arrow.png"></div>',
        prevArrow: '<div class="why-rer-carousel-arrows why-rer-arrow-right"><img class="why-rer-arrow-width-14px" src="img/icons/left-arrow.png"></div>'
      }
    }
  ]
});