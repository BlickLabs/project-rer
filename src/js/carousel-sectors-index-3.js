$('.modal-sector-carousel').slick({
  arrows: true,
  nextArrow: '<div class="sectors-arrows sectors-arrow-left"><img class="sectors-width" src="img/icons/right-arrow.png"></div>',
  prevArrow: '<div class="sectors-arrows sectors-arrow-right"><img class="sectors-width" src="img/icons/left-arrow.png"></div>',
  variableWidth: true,
  infinite: false,
  fade: true,

  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: true,
      nextArrow: '<div class="sectors-arrows sectors-arrow-left"><img class="sectors-width" src="img/icons/right-arrow.png"></div>',
      prevArrow: '<div class="sectors-arrows sectors-arrow-right"><img class="sectors-width" src="img/icons/left-arrow.png"></div>',
      variableWidth: true,
      infinite: false
    }
  },
  {
   breakpoint: 480,
    settings: {
      arrows: true,
      nextArrow: '<div class="sectors-arrows sectors-arrow-left"><img class="sectors-width" src="img/icons/right-arrow.png"></div>',
      prevArrow: '<div class="sectors-arrows sectors-arrow-right"><img class="sectors-width" src="img/icons/left-arrow.png"></div>',
      variableWidth: true,
      infinite: false
    } 
  }]
});