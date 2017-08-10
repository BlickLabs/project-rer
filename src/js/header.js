var last_known_scroll_position = 0;
var ticking = false;

var siteNavbar = document.querySelector('.site-navbar');
//navbar-fixed-top
function doSomething(scroll_pos) {
  if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/project-rer/index.html' || window.location.pathname === '/project-rer/' || window.location.pathname === '/project-rer/solar-benefits.html' || window.location.pathname === '/solar-benefits.html') {
    if (scroll_pos > 30) {
      siteNavbar.classList.add('nav-white-bg');
      siteNavbar.classList.remove('nav-transparent-bg');
    } else {
      siteNavbar.classList.add('nav-transparent-bg');
      siteNavbar.classList.remove('nav-white-bg');
    }
  }
}

doSomething();

window.addEventListener('scroll', function(e) {
  if (e.view) {
    last_known_scroll_position = e.view.pageYOffset;
  }
  else {
    last_known_scroll_position = window.scrollY;
  }
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false
    });
  }
  ticking = true;
});