const btnPopup = document.querySelectorAll('.btn');
const modalWindow = document.querySelector('.modal-window');
const madalWindowClose = document.querySelector('.btn-close');
const burgerBtn = document.querySelector('.header__burger');
const burgerNav = document.querySelector('.burger__nav');
const burgerBtnLink = document.querySelector('.header__burger-link');


btnPopup.forEach(b => b.addEventListener('click', (e) => {
  document.body.style.paddingRight = "".concat(getScrollbarWidth(), "px");
  document.body.style.overflow = "hidden";
  modalWindow.classList.add('modal-window-active')
}))


madalWindowClose.addEventListener('click', (e) => {
  event.preventDefault();
  modalWindow.classList.remove('modal-window-active');
  document.body.style.paddingRight = "";
  document.body.style.overflow = "visible";
});

burgerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  burgerNav.classList.toggle('burger__nav-active');
  burgerBtnLink.classList.toggle('header__burger-link-active');

  // проверяем есть ли класс активности для того чтобы убрать скролл
  if (burgerNav.classList.contains('burger__nav-active')) {
    hideScroll();
  } else {
    showScroll();
  }
})



// функции которые прячут скролл и возвращают когда включен бургер
const hideScroll = () => {
  const scrollWidth = `${getScrollbarWidth()}px`;

  document.body.style.paddingRight = scrollWidth;
  document.body.style.overflow = 'hidden';

  mainNavigation.style.paddingRight = scrollWidth;
}

const showScroll = () => {

  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';


  mainNavigation.style.paddingRight = '';

}

// get scrollbar width
const getScrollbarWidth = () => {
  const outer = document.createElement('div');

  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';


  document.body.appendChild(outer);
  const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);

  return scrollBarWidth;
}



// слайдер
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});