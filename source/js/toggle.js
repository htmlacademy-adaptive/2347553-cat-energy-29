let headerMain = document.querySelector('.main-header');
let navMain = document.querySelector('.main-nav');
let navMainList = document.querySelector('.main-nav__list');
let navToggle = document.querySelector('.main-nav__toggle');

headerMain.classList.remove('main-header--nojs');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMainList.classList.contains('main-nav__list--close')) {
    navMainList.classList.remove('main-nav__list--close');
    navMainList.classList.add('main-nav__list--open');
    navToggle.classList.remove('main-nav__toggle--close');
    navToggle.classList.add('main-nav__toggle--open');
  } else {
    navMainList.classList.add('main-nav__list--close');
    navMainList.classList.remove('main-nav__list--open');
    navToggle.classList.add('main-nav__toggle--close');
    navToggle.classList.remove('main-nav__toggle--open');
  }
});
