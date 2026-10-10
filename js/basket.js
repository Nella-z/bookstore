// ============================================================
// basket.js — корзина, промокод, оформление заказа, кнопка «В корзину»
// Все данные идут через api (api.js должен быть подключён раньше этого файла)
// ============================================================

// ---------- элементы страницы ----------
const basketList = document.getElementById('basket__list');
const numberGoods = document.querySelector('.number__goods');
const summaryPrice = document.querySelector('.summary__price');

const orderBtn = document.querySelector('.basket__order-btn') || document.querySelector('[class*="order"]');
const modal = document.getElementById('order-modal');
const closeModal = document.getElementById('close-modal');
const orderForm = document.getElementById('order-form');
const orderCityInput = document.getElementById('order-city');

const promoInput = document.getElementById('promocode__input');
const promoBtn = document.getElementById('promocode__btn');
const promoMessage = document.getElementById('promocode__message');

let lastCartTotal = 0;     
let appliedPromoCode = null; 

function getDiscountElement() {
    let el = document.querySelector('.discount-amount');
    if (!el && summaryPrice && summaryPrice.parentElement) {
        el = document.createElement('p');
        el.className = 'discount-amount';
        el.style.color = '#27ae60';
        el.style.fontWeight = 'bold';
        summaryPrice.parentElement.insertBefore(el, summaryPrice);
    }
    return el;
}

function showTotals(total, discountAmount = 0) {
    if (summaryPrice) summaryPrice.textContent = `${total} ₽`;

    const discountEl = getDiscountElement();
    if (!discountEl) return;

    if (discountAmount > 0) {
        discountEl.textContent = `Скидка: -${discountAmount} ₽`;
        discountEl.style.display = 'block';
    } else {
        discountEl.style.display = 'none';
    }
}

function showMessage(text, type) {
    if (!promoMessage) return;
    promoMessage.textContent = text;
    promoMessage.style.color = type === 'success' ? '#27ae60' : '#e74c3c';
}

function resetPromo() {
    appliedPromoCode = null;
    if (promoInput) {
        promoInput.disabled = false;
        promoInput.value = '';
    }
    if (promoBtn) {
        promoBtn.disabled = false;
        promoBtn.style.opacity = '';
    }
    if (promoMessage) promoMessage.textContent = '';
}

async function refreshPromo() {
    if (!appliedPromoCode) {
        showTotals(lastCartTotal, 0);
        return;
    }

    try {
        const result = await api.cart.applyPromocode(appliedPromoCode);
        const discountAmount = result.discountAmount ?? (lastCartTotal - result.newTotal);
        showTotals(result.newTotal, discountAmount);
    } catch (error) {
        resetPromo();
        showTotals(lastCartTotal, 0);
    }
}

async function checkPromocode() {
    const code = promoInput.value.trim().toUpperCase();

    if (!code) {
        showMessage('Введите промокод', 'error');
        return;
    }

    if (appliedPromoCode) {
        showMessage('Промокод уже применен', 'error');
        return;
    }

    promoBtn.disabled = true;

    try {
        const result = await api.cart.applyPromocode(code);
        appliedPromoCode = code;

        const discountAmount = result.discountAmount ?? (lastCartTotal - result.newTotal);
        showTotals(result.newTotal, discountAmount);

        showMessage(`Промокод "${code}" успешно применен!`, 'success');
        promoInput.disabled = true;
        promoBtn.style.opacity = '0.5';
    } catch (error) {
        showMessage(error.message || 'Неверный промокод', 'error');
        promoBtn.disabled = false;
    }
}

function createCartItemHTML(item) {
    const book = item.book;
    return `
        <div data-id="${book.id}">
            <a href="product.html?id=${book.id}" class="basket__item-link basket__item">
                <img src="${book.coverUrl}" class="book__img" alt="${book.title}">
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
                        <p>Кол-во: ${item.qty}</p>
                        <button type="button" class="delete-btn" data-id="${book.id}" aria-label="Удалить из корзины">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="delite__yes">
                                <path d="M2.5 15C2.04167 15 1.64931 14.8368 1.32292 14.5104C0.996528 14.184 0.833333 13.7917 0.833333 13.3333V2.5H0V0.833333H4.16667V0H9.16667V0.833333H13.3333V2.5H12.5V13.3333C12.5 13.7917 12.3368 14.184 12.0104 14.5104C11.684 14.8368 11.2917 15 10.8333 15H2.5ZM10.8333 2.5H2.5V13.3333H10.8333V2.5ZM4.16667 11.6667H5.83333V4.16667H4.16667V11.6667ZM7.5 11.6667H9.16667V4.16667H7.5V11.6667Z" fill="#1D1B20"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </a>
        </div>
    `;
}

async function renderBasket() {
    if (!basketList) return;

    try {
        basketList.innerHTML = '<p>Загрузка...</p>';

        const response = await api.cart.getCart();
        const cartItems = response.items || [];
        lastCartTotal = response.total || 0;

        if (cartItems.length === 0) {
            resetPromo();
            basketList.innerHTML = '<p class="empty-message">В корзине пока нет книг</p>';
            basketList.style.width = '50vw';
            if (numberGoods) numberGoods.textContent = '0 шт';
            showTotals(0, 0);
            return;
        }

        basketList.style.width = '';
        basketList.innerHTML = cartItems.map(createCartItemHTML).join('');

        const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
        if (numberGoods) numberGoods.textContent = `${totalCount} шт`;

        await refreshPromo();
    } catch (error) {
        console.error(error);
        basketList.innerHTML = '<p>Ошибка загрузки корзины</p>';
    }
}

async function openOrderModal() {
    try {
        const response = await api.cart.getCart();
        if (!response.items || response.items.length === 0) {
            alert('Корзина пуста');
            return;
        }

        const user = await api.auth.getCurrentUser();
        const city = user && user.city ? user.city.trim() : '';
        orderCityInput.value = city && city !== 'Не указан' ? city : '';

        modal.style.display = 'flex';
    } catch (error) {
        alert(error.message || 'Не удалось открыть оформление заказа');
    }
}

async function submitOrder(event) {
    event.preventDefault();

    const city = orderCityInput.value.trim();
    const street = document.getElementById('order-street').value.trim();
    const house = document.getElementById('order-house').value.trim();

    if (!city || !street || !house) {
        alert('Заполните все поля');
        return;
    }

    const submitBtn = orderForm.querySelector('[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
        await api.cart.createOrder({
            promoCode: appliedPromoCode,
            address: `${city}, ${street}, ${house}`
        });

        modal.style.display = 'none';
        orderForm.reset();
        resetPromo();
        alert('Заказ успешно оформлен!');
        await renderBasket();
    } catch (error) {
        alert(error.message || 'Не удалось оформить заказ');
    } finally {
        if (submitBtn) submitBtn.disabled = false;
    }
}

if (basketList) {
    basketList.addEventListener('click', async function (event) {
        const deleteBtn = event.target.closest('.delete-btn');
        if (!deleteBtn) return;

        event.preventDefault();
        event.stopPropagation();

        try {
            await api.cart.removeFromCart(Number(deleteBtn.dataset.id));
            await renderBasket();
        } catch (error) {
            alert(error.message || 'Не удалось удалить товар');
        }
    });

    renderBasket();
}

document.addEventListener('click', async function (event) {
    const addToCartBtn = event.target.closest('.into__basket');
    if (!addToCartBtn) return;

    event.preventDefault();

    if (!token.exists()) {
        window.location.href = 'input.html';
        return;
    }

    addToCartBtn.disabled = true;

    try {
        await api.cart.addToCart(Number(addToCartBtn.dataset.bookId));
        window.location.href = 'basket.html';
    } catch (error) {
        alert(error.message || 'Не удалось добавить товар в корзину');
        addToCartBtn.disabled = false;
    }
});

if (orderBtn && modal) {
    orderBtn.addEventListener('click', openOrderModal);
}

if (closeModal && modal) {
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
    orderForm.addEventListener('submit', submitOrder);
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