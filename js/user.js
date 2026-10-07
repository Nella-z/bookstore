let currentUser = JSON.parse(localStorage.getItem('user')) || {
    fio: "Иванова Анна Сергеевна",
    email: "anna@example.com",
    phone: "+7 988 545 55 55",
    birth: "1998-04-12",
    city: "Владикавказ",
    password: "********",
    avatar: "images/avatar.svg"
};

// Берём заказы из localStorage (оформленные через корзину)
let orders = JSON.parse(localStorage.getItem('orders')) || [];
document.getElementById('profile__fio').value = currentUser.fio;
document.getElementById('profile__mail').value = currentUser.email;
document.getElementById('profile__tel').value = currentUser.phone;
document.getElementById('profile__date').value = currentUser.birth;
document.getElementById('profile__city').value = currentUser.city;
document.getElementById('profile__password').value = currentUser.password;
function createOrderCard(order) {
    const book = books.find(b => b.id === order.bookId);
    if (!book) return '';
    return `
        <div class="swiper-slide">
            <a class="book">
                <img src="${book.coverUrl}" class="book__img" alt="Книга">
                <div class="inf__book">
                    <div class="basic__inf"></div>
                    <h3 class="name__book">${book.title}</h3>
                    <p class="fio__book">${book.author}</p>
                    <div class="basket__book">
                        <div class="status__book">
                            <p>Статус: </p>
                            <span class="status">${order.status}</span>
                        </div>
                        <p class="price">${book.price}₽</p>
                    </div>
                </div>
            </a>
        </div>
    `;
}
const swiperWrapper = document.querySelector('.swiper-wrapper');
if (swiperWrapper) {
    if (orders.length === 0) {
        swiperWrapper.innerHTML = '<p style="padding: 20px;">У вас пока нет активных заказов</p>';
    } else {
        const ordersHTML = orders.map(createOrderCard).join('');
        swiperWrapper.innerHTML = ordersHTML;
    }
}
document.getElementById('avatar_btn').addEventListener('click', () => {
    document.getElementById('avatar_input').click();
});
document.getElementById('avatar_input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('avatar_preview').src = reader.result;
    };
    reader.readAsDataURL(file);
});


if (currentUser.avatar) {
    document.getElementById('avatar_preview').src = currentUser.avatar;
}
document.getElementById('avatar_input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function() {
        const base64Image = reader.result;
        document.getElementById('avatar_preview').src = base64Image;
        currentUser.avatar = base64Image;
        localStorage.setItem('user', JSON.stringify(currentUser));
    };
    reader.readAsDataURL(file);
});


const saveBtn = document.getElementById('save__changes');
if (saveBtn) {
    saveBtn.addEventListener('click', function(event) {
        event.preventDefault(); 

        currentUser.fio = document.getElementById('profile__fio').value.trim();
        currentUser.email = document.getElementById('profile__mail').value.trim();
        currentUser.phone = document.getElementById('profile__tel').value.trim();
        currentUser.birth = document.getElementById('profile__date').value;
        currentUser.city = document.getElementById('profile__city').value.trim();
        currentUser.password = document.getElementById('profile__password').value;

        localStorage.setItem('user', JSON.stringify(currentUser));

        alert('Данные профиля успешно сохранены!');

        const headerAvatar = document.querySelector('.user-dropdown img');
        if (headerAvatar && currentUser.avatar) {
            headerAvatar.src = currentUser.avatar;
        }
    });
}