const poisk__mobile = document.querySelector('.poisk__mobile');
const poisk_mini = document.querySelector('.header__poisk_mini');
const btn__fltr = document.querySelector('.btn__fltr');
const catalog__filtr_mini = document.querySelector('.catalog__filtr_mini');
const btn__save = document.querySelector('.btn__save');
const searchInput = document.getElementById('poisk');

if (poisk__mobile && poisk_mini) {
    poisk__mobile.addEventListener('click', () => {
        poisk_mini.classList.toggle('active');
    });
}
if (btn__fltr && catalog__filtr_mini) {
    btn__fltr.addEventListener('click', () => {
        catalog__filtr_mini.classList.toggle('active');
    });
}
if (btn__save && catalog__filtr_mini) {
    btn__save.addEventListener('click', () => {
        catalog__filtr_mini.classList.remove('active');
    });
}



const reviewsSlider = new Swiper('.rv-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    speed: 600,
    autoHeight: true,
    pagination: {
        el: '.rv-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        }
    }
});