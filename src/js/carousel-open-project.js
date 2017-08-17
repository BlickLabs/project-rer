$('.open-project-carousel').slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToScroll: 1,
  slidesToShow: 1,
  nextArrow: '<div class="open-project-arrow-desktop"><div class="open-project-carousel-arrows only-project-arrow-left"><img class="arrow-width-17px" src="img/icons/right-arrow.png"></div></div><img class="half-circle-project-next open-project-arrow-mobile" src="img/icons/half-circle-next.png">',
  prevArrow: '<div class="open-project-arrow-desktop"><div class="open-project-carousel-arrows only-project-arrow-right"><img class="arrow-width-17px" src="img/icons/left-arrow.png"></div></div><img class="half-circle-project-prev open-project-arrow-mobile" src="img/icons/half-circle-prev.png">'
});