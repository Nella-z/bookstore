let currentUser = {
    fio: "Иванова Анна Сергеевна",
    email: "anna@example.com",
    phone: "+7 988 545 55 55",
    birth: "1998-04-12",
    city: "Владикавказ",
    password: "********"
}; 
let orders = [
    { id: 1, bookId: 5, status: "В пути" },
    { id: 2, bookId: 22, status: "В пути" },
    { id: 3, bookId: 40, status: "В пути" }
];
document.getElementById('profile__fio').value = currentUser.fio;
document.getElementById('profile__mail').value = currentUser.email;
document.getElementById('profile__tel').value = currentUser.phone;
document.getElementById('profile__date').value = currentUser.birth;
document.getElementById('profile__city').value = currentUser.city;
document.getElementById('profile__password').value = currentUser.password;
function createOrderCard(order) {
    const book = books.find(b => b.id === order.bookId);
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
const ordersHTML = orders.map(createOrderCard).join('');
document.querySelector('.swiper-wrapper').innerHTML = ordersHTML;
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