const basketList = document.getElementById('basket__list');
const numberGoods = document.querySelector('.number__goods');
const summaryPrice = document.querySelector('.summary__price');

if (basketList) {
    function renderBasket() {
        const cartIds = getCart();
const cartBooks = books.filter(book => cartIds.includes(book.id));

        if (cartBooks.length === 0) {
            basketList.innerHTML = '<p class="empty-message">В корзине пока нет книг</p>';
            basketList.style.width = '50vw';
            if (numberGoods) numberGoods.textContent = '0 шт';
            if (summaryPrice) summaryPrice.textContent = '0 ₽';
            return;
        }

        basketList.innerHTML = cartBooks.map(book => `





            <div  data-id="${book.id}">
                <a href="product.html?id=${book.id}" class="basket__item-link basket__item">
                    <img src="${book.coverUrl}" class="book__img" alt="Книга">
                    <div class="inf__book">
                        <div class="inf__book-top">
                            <div>
                                <div class="star">
                                    <img src="images/Star.svg" alt="оценка">
                                    <p>${book.rating}</p>
                                </div>
                                <h3 class="name__book">${book.title}</h3>
                            </div>
                            <p class="price">${book.price} ₽</p>
                        </div>
                        <div class="basket__controls">
                            <p class="fio__book-basket">${book.author}</p>
                            
                            <button type="button" class="delete-btn" data-id="${book.id}" aria-label="Удалить из корзины">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="delite__yes">
                                    <path d="M2.5 15C2.04167 15 1.64931 14.8368 1.32292 14.5104C0.996528 14.184 0.833333 13.7917 0.833333 13.3333V2.5H0V0.833333H4.16667V0H9.16667V0.833333H13.3333V2.5H12.5V13.3333C12.5 13.7917 12.3368 14.184 12.0104 14.5104C11.684 14.8368 11.2917 15 10.8333 15H2.5ZM10.8333 2.5H2.5V13.3333H10.8333V2.5ZM4.16667 11.6667H5.83333V4.16667H4.16667V11.6667ZM7.5 11.6667H9.16667V4.16667H7.5V11.6667Z" fill="#1D1B20"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        `).join('');

        const totalCount = cartBooks.length;
        const totalPrice = cartBooks.reduce((sum, book) => sum + book.price, 0);

        if (numberGoods) numberGoods.textContent = `${totalCount} шт`;
        if (summaryPrice) summaryPrice.textContent = `${totalPrice} ₽`;
    }

    basketList.addEventListener('click', function (event) {
        const deleteBtn = event.target.closest('.delete-btn');
        
        if (!deleteBtn) return;

        event.preventDefault();
        event.stopPropagation();

        const bookId = Number(deleteBtn.dataset.id);

removeFromCart(bookId);
renderBasket();
    });

    renderBasket();
}
document.addEventListener('click', function (event) {
    const addToCartBtn = event.target.closest('.into__basket');
    
    if (!addToCartBtn) return;

    event.preventDefault(); 

    const bookId = Number(addToCartBtn.dataset.bookId);
const selectedBook = books.find(book => book.id === bookId);

if (selectedBook) {
    addToCart(bookId);
    window.location.href = 'basket.html';
}
});

// === Оформление заказа ===
const orderBtn = document.querySelector('.basket__order-btn') || document.querySelector('[class*="order"]');
const modal = document.getElementById('order-modal');
const closeModal = document.getElementById('close-modal');
const orderForm = document.getElementById('order-form');
const orderCityInput = document.getElementById('order-city');

if (orderBtn && modal) {
    orderBtn.addEventListener('click', () => {
        const cart = getCart();
        if (cart.length === 0) {
            alert('Корзина пуста');
            return;
        }
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.city && user.city.trim() !== '' && user.city.trim() !== 'Не указан') {
            orderCityInput.value = user.city;
        } else {
            orderCityInput.value = '';
        }
        modal.style.display = 'flex';
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const city = orderCityInput.value.trim();
        const street = document.getElementById('order-street').value.trim();
        const house = document.getElementById('order-house').value.trim();

        if (!city || !street || !house) {
            alert('Заполните все поля');
            return;
        }

        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];

        const cartIds = getCart();
        const cartBooks = books.filter(b => cartIds.includes(b.id));

        cartBooks.forEach(book => {
            storedOrders.push({
                id: Date.now() + Math.floor(Math.random() * 1000),
                bookId: book.id,
                status: 'В пути',
                address: `${city}, ${street}, ${house}`,
                date: new Date().toLocaleDateString('ru-RU')
            });
        });

        localStorage.setItem('orders', JSON.stringify(storedOrders));

        saveCart([]);

        modal.style.display = 'none';

        alert('Заказ успешно оформлен!');
        window.location.reload();
    });
}


const VALID_PROMOCODES = {
    "BOOK10": { type: "percent", value: 10 },   
    "BOOK500": { type: "fixed", value: 500 },   
    "BOOK15": { type: "percent", value: 15 }    
};

let appliedPromo = null; 

// 2. Элементы DOM
const promoInput = document.getElementById('promocode__input');
const promoBtn = document.getElementById('promocode__btn');
const promoMessage = document.getElementById('promocode__message');
const summaryPriceEl = document.querySelector('.summary__price');
const discountEl = document.querySelector('.discount-amount') || createDiscountElement();

function createDiscountElement() {
    const el = document.createElement('p');
    el.className = 'discount-amount';
    el.style.color = '#27ae60'; 
    el.style.fontWeight = 'bold';
    if (summaryPriceEl && summaryPriceEl.parentElement) {
        summaryPriceEl.parentElement.insertBefore(el, summaryPriceEl);
    }
    return el;
}

function checkPromocode() {
    const code = promoInput.value.trim().toUpperCase();
    
    if (!code) {
        showMessage("Введите промокод", "error");
        return;
    }

    if (appliedPromo) {
        showMessage("Промокод уже применен", "error");
        return;
    }

    const promoData = VALID_PROMOCODES[code];

    if (promoData) {
        appliedPromo = promoData;
        showMessage(`Промокод "${code}" успешно применен!`, "success");
        promoInput.disabled = true; 
        promoBtn.disabled = true;
        promoBtn.style.opacity = "0.5";
        updateCartTotal(); 
    } else {
        showMessage("Неверный промокод", "error");
    }
}

function updateCartTotal() {
    const cartIds = getCart();
    const cartBooks = books.filter(book => cartIds.includes(book.id));
    
    const baseTotal = cartBooks.reduce((sum, book) => sum + book.price, 0);
    let discountAmount = 0;

    if (appliedPromo) {
        if (appliedPromo.type === "percent") {
            discountAmount = Math.round(baseTotal * (appliedPromo.value / 100));
        } else if (appliedPromo.type === "fixed") {
            discountAmount = appliedPromo.value;
        }
        
        if (discountAmount > baseTotal) discountAmount = baseTotal;
    }

    const finalTotal = baseTotal - discountAmount;

    if (summaryPriceEl) {
        summaryPriceEl.textContent = `${finalTotal} ₽`;
    }
    
    if (discountEl) {
        if (discountAmount > 0) {
            discountEl.textContent = `Скидка: -${discountAmount} ₽`;
            discountEl.style.display = 'block';
        } else {
            discountEl.style.display = 'none';
        }
    }
}

function showMessage(text, type) {
    promoMessage.textContent = text;
    if (type === "success") {
        promoMessage.style.color = "#27ae60"; 
    } else {
        promoMessage.style.color = "#e74c3c"; 
    }
}

if (promoBtn) {
    promoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        checkPromocode();
    });
}

if (promoInput) {
    promoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkPromocode();
        }
    });
}