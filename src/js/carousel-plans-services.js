$('.solar-images-carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        nextArrow: '<div class="services-arrows services-arrow-left"><img class="services-width-14px" src="img/icons/right-arrow.png"></div>',
        prevArrow: '<div class="services-arrows services-arrow-right"><img class="services-width-14px" src="img/icons/left-arrow.png"></div>',
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
        nextArrow: '<div class="services-arrows services-arrow-left"><img class="services-width-14px" src="img/icons/right-arrow.png"></div>',
        prevArrow: '<div class="services-arrows services-arrow-right"><img class="services-width-14px" src="img/icons/left-arrow.png"></div>',
        variableWidth: true
      }
    }
  ]
});