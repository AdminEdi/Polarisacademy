function toggleNav() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
}

// صبر کن تا صفحه و Swiper کامل لود بشه
document.addEventListener("DOMContentLoaded", function () {
  // یه کم دیگه هم صبر کن تا Swiper کاملاً آماده بشه
  setTimeout(function () {
    if (typeof Swiper !== 'undefined') {
      new Swiper('.articles-swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
        navigation: {
          nextEl: '.articles-swiper .swiper-button-next',
          prevEl: '.articles-swiper .swiper-button-prev',
        },
        pagination: {
          el: '.articles-swiper .swiper-pagination',
          clickable: true,
        },
        rtl: true,
      });
      console.log("اسلایدر با موفقیت فعال شد!");
    } else {
      console.error("Swiper لود نشده!");
    }
  }, 500);
});
