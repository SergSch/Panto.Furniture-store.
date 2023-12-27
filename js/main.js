const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let btn of infoBtns) {
  btn.addEventListener('click', showHint);
}

function showHint(e) {
  e.stopPropagation();

  for (let hint of infoHints) {
    hint.classList.add('none');
  }

  this.parentNode.querySelector('.info-hint').classList.toggle('none');
}

document.addEventListener('click', closeHints);

function closeHints() {
  for (let hint of infoHints) {
    hint.classList.add('none');
  }
}

for (let hint of infoHints) {
  hint.addEventListener('click', (e) => e.stopPropagation());
}

// Swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  freeMode: true,

  slidesPerView: 1,
  spaceBetween: 42,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    //   1024: {
    //     slidesPerView: 5,
    //     spaceBetween: 50,
    //   },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },

  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
});

// Tabs
const tabBtns = document.querySelectorAll('[data-tab]');

const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabBtns) {
  btn.addEventListener('click', function (e) {
    for (let btn of tabBtns) {
      btn.classList.remove('tab-controls_btn--active');
    }
    this.classList.add('tab-controls_btn--active');

    for (let tab of tabsProducts) {
      if (this.dataset.tab === 'all') {
        tab.classList.remove('none');
      } else {
        if (tab.dataset.tabValue === this.dataset.tab) {
          tab.classList.remove('none');
        } else {
          tab.classList.add('none');
        }
      }
    }

    swiper.update();
  });
}

// Mobile Nav

const mobileNavOpen = document.querySelector('#open-nav-btn-btn');
const mobileNavClose = document.querySelector('#close-mobile-nav');

const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpen.addEventListener('click', () => {
  mobileNav.classList.add('mobile-nav-wrapper--open');
});

mobileNavClose.addEventListener('click', () => {
  mobileNav.classList.remove('mobile-nav-wrapper--open');
});
