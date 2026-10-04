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
        const selectedBook = books.find(book => book.id === bookId);
        
        if (selectedBook) {
            selectedBook.isInCart = false;
            renderBasket();
        }
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
        selectedBook.isInCart = true;
        window.location.href = 'basket.html';
    }
});