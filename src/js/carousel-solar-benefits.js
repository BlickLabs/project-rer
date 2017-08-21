$('.why-container-carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        nextArrow: '<div class="why-arrows why-arrow-left"><img class="why-width-14px" src="img/icons/right-arrow.png"></div>',
        prevArrow: '<div class="why-arrows why-arrow-right"><img class="why-width-14px" src="img/icons/left-arrow.png"></div>',
        variableWidth: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        infinite: true,
        slidesToShow: 1,
        nextArrow: '<div class="why-arrows why-arrow-left"><img class="why-width-14px" src="img/icons/right-arrow.png"></div>',
        prevArrow: '<div class="why-arrows why-arrow-right"><img class="why-width-14px" src="img/icons/left-arrow.png"></div>',
        variableWidth: true
      }
    }
  ]
});