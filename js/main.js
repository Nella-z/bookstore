const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    speed: 600,
    navigation: {
        nextEl: '.reviews__arrow-next',
        prevEl: '.reviews__arrow-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

const reviewsPaginationSwiper = new Swiper('.rv-slider', {
    slidesPerView: 'auto', // Показывает слайды их реального размера (до max-width)
    centeredSlides: true,  // Активный слайд всегда строго по центру
    spaceBetween: 20,      // Отступ между карточками
    loop: true,
    speed: 600,
    autoHeight: true,
    pagination: {
        el: '.rv-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto', // На планшетах и десктопах тоже auto
            spaceBetween: 20,
        }
    }
});