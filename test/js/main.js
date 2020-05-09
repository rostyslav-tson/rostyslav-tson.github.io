var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
  });

  var swiper = new Swiper('.reviews_slider', {
    slidesPerView: 2,
    slidesPerGroup: 1,
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    loop: true,

    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 2,
    }
  }
  });

  var swiper = new Swiper('.sertification_slider', {
    slidesPerView: 3,
    slidesPerGroup: 2,
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    autoplay: {
      delay: 5000,
    },
    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
      }
    }
  });