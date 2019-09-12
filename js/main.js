var navMain = document.querySelector('.main-header');
var mobileMenu = document.querySelectorAll('.nav-lists .nav-list');
var mobileToggle = document.querySelector('.menu-toggle');

navMain.classList.remove('nav-no-js');

mobileToggle.addEventListener('click', function() {
  if(mobileToggle.classList.contains('menu-toggle-close')) {
    mobileToggle.classList.remove('menu-toggle-close');
    for(var i = 0; i < mobileMenu.length; i++) {
      mobileMenu[i].classList.add('nav-list-none');
    }
  } else {
    mobileToggle.classList.add('menu-toggle-close');
    for(var i = 0; i < mobileMenu.length; i++) {
      mobileMenu[i].classList.remove('nav-list-none');
    }
  }
});

