

function createOrderCard(order) {
    const book = order.book;
    return `
        <div class="swiper-slide">
            <a class="book">
                <img src="${book.coverUrl}" class="book__img" alt="${book.title}">
                <div class="inf__book">
                    <div class="basic__inf"></div>
                    <h3 class="name__book">${book.title}</h3>
                    <p class="fio__book">${book.author}</p>
                    <div class="basket__book">
                        <div class="status__book">
                            <p>Статус:</p>
                            <span class="status">${order.status}</span>
                        </div>
                        <p class="price">${book.price}₽</p>
                    </div>
                </div>
            </a>
        </div>
    `;
}

async function renderOrders() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (!swiperWrapper) return;

    try {
        swiperWrapper.innerHTML = '<p style="padding: 20px;">Загрузка...</p>';

        const response = await api.cart.getOrders();
        const orders = response.items || [];

        if (orders.length === 0) {
            swiperWrapper.innerHTML = '<p style="padding: 20px;">У вас пока нет активных заказов</p>';
        } else {
            swiperWrapper.innerHTML = orders.map(createOrderCard).join('');
        }
    } catch (error) {
        console.error(error);
        swiperWrapper.innerHTML = '<p style="padding: 20px;">Не удалось загрузить заказы</p>';
    }
}

async function loadProfile() {
    try {
        const user = await api.auth.getCurrentUser();

        if (!user) {
            window.location.href = 'input.html';
            return;
        }

        document.getElementById('profile__fio').value = user.fio || '';
        document.getElementById('profile__mail').value = user.email || '';
        document.getElementById('profile__tel').value = user.phone || '';
        document.getElementById('profile__date').value = user.birth || '';
        document.getElementById('profile__city').value = user.city || '';

        document.getElementById('profile__mail').readOnly = true;

        if (user.avatarUrl) {
            document.getElementById('avatar_preview').src = user.avatarUrl;
        }

        await renderOrders();
    } catch (error) {
        console.error(error);
        alert('Не удалось загрузить профиль. Попробуйте обновить страницу.');
    }
}

function initProfileForm() {
    const saveBtn = document.getElementById('save__changes');
    if (!saveBtn) return;

    saveBtn.addEventListener('click', async function (event) {
        event.preventDefault();

        saveBtn.disabled = true;

        try {
            await api.auth.updateProfile({
                fio: document.getElementById('profile__fio').value.trim(),
                phone: document.getElementById('profile__tel').value.trim(),
                birth: document.getElementById('profile__date').value,
                city: document.getElementById('profile__city').value.trim()
            });
            alert('Данные профиля успешно сохранены!');
        } catch (error) {
            alert('Ошибка сохранения: ' + error.message);
        } finally {
            saveBtn.disabled = false;
        }
    });
}

function initAvatarUpload() {
    const avatarBtn = document.getElementById('avatar_btn');
    const avatarInput = document.getElementById('avatar_input');
    const avatarPreview = document.getElementById('avatar_preview');
    if (!avatarBtn || !avatarInput || !avatarPreview) return;

    avatarBtn.addEventListener('click', () => {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', async function (event) {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Выберите файл-изображение');
            avatarInput.value = '';
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert('Файл слишком большой (максимум 2 МБ)');
            avatarInput.value = '';
            return;
        }

        try {
            const result = await api.auth.uploadAvatar(file);
            avatarPreview.src = result.avatarUrl;

            const headerAvatar = document.querySelector('.user-dropdown img');
            if (headerAvatar) headerAvatar.src = result.avatarUrl;
        } catch (error) {
            alert(error.message || 'Не удалось загрузить аватар');
        } finally {
            avatarInput.value = '';
        }
    });
}

if (document.getElementById('profile__fio')) {
    loadProfile();
    initProfileForm();
    initAvatarUpload();
}