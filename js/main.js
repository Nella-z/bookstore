document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));

    if (isLoggedIn && user) {
        const loginLinks = document.querySelectorAll('.input__header');
        
        loginLinks.forEach(link => {
            const parentItem = link.closest('.menu-item') || link.parentElement;
            
            if (parentItem && !parentItem.querySelector('.user-dropdown')) {
                parentItem.innerHTML = `
                    <div class="user-dropdown" style="position: relative; cursor: pointer;">
                        <img src="${user.avatar || 'images/avatar.svg'}" alt="Аватар" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; display: block;">
                        <div class="dropdown-menu" style="display: none; position: absolute; top: 100%; right: 0; background: white; border: 1px solid #ccc; border-radius: 8px; min-width: 150px; z-index: 100; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            <a href="profile.html" style="display: block; padding: 10px; text-decoration: none; color: #333;">Профиль</a>
                            <a href="#" class="logout-btn" style="display: block; padding: 10px; text-decoration: none; color: red; border-top: 1px solid #eee;">Выйти</a>
                        </div>
                    </div>
                `;

                const dropdown = parentItem.querySelector('.user-dropdown');
                const menu = parentItem.querySelector('.dropdown-menu');
                
                dropdown.addEventListener('click', (e) => {
                    e.stopPropagation();
                    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
                });

                const logoutBtn = parentItem.querySelector('.logout-btn');
                if (logoutBtn) {
                    logoutBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        localStorage.removeItem('isLoggedIn');
                        window.location.href = 'home.html';
                    });
                }
            }
        });

        const inputBtm = document.querySelector('.input__marketplace');
        if (inputBtm) {
            inputBtm.style.display = 'none';
        }
    }
});

document.addEventListener('click', (e) => {
    const dropdowns = document.querySelectorAll('.user-dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) menu.style.display = 'none';
        }
    });
});
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
