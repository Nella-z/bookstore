
const favouritesList = document.getElementById('favourites-list');
 
function favoritesBookCard(book) {
    return `
        <a class="book" href="product.html?id=${book.id}" data-book-id="${book.id}">
            <img src="${book.coverUrl}" class="book__img" alt="${book.title}">
            <div class="inf__book">
                <div class="basic__inf">
                    <div class="star">
                        <img src="images/Star.svg" alt="оценка">
                        <p>${book.rating}</p>
                    </div>
                    <button type="button" class="favour" data-book-id="${book.id}">
                        <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="favour_no">
                            <path d="M1 0.5H12C12.2761 0.5 12.5 0.723858 12.5 1V17.5615C12.5 18.0087 11.9575 18.2314 11.6436 17.9131L7.76758 13.9824C7.19434 13.4016 6.26177 13.3854 5.66895 13.9463L1.34375 18.04C1.02501 18.3417 0.5 18.1156 0.5 17.6768V1C0.5 0.723858 0.723858 0.5 1 0.5Z" stroke="#110C1F" />
                        </svg>
                    </button>
                </div>
                <h3 class="name__book">${book.title}</h3>
                <p class="fio__book">${book.author}</p>
                <div class="basket__book">
                    <button type="button" class="into__basket" data-book-id="${book.id}">В корзину</button>
                    <p class="price">${book.price}₽</p>
                </div>
            </div>
        </a>
    `;
}
 
function showEmptyFavourites() {
    favouritesList.innerHTML = '<p>В избранном пока нет книг</p>';
}
 
async function renderFavourites() {
    try {
        favouritesList.innerHTML = '<p>Загрузка...</p>';
 
        const response = await api.favorites.getFavorites();
        const favouriteBooks = response.items || [];
 
        if (favouriteBooks.length === 0) {
            showEmptyFavourites();
        } else {
            favouritesList.innerHTML = favouriteBooks.map(favoritesBookCard).join('');
        }
    } catch (error) {
        console.error(error);
        favouritesList.innerHTML = '<p>Ошибка загрузки избранного</p>';
    }
}
 
if (favouritesList) {
    if (!token.exists()) {
        window.location.href = 'input.html';
    } else {
        renderFavourites();
 
        favouritesList.addEventListener('click', async function (event) {
            const favourBtn = event.target.closest('.favour');
            if (!favourBtn) return;
 
            event.preventDefault();
            event.stopPropagation();
 
            favourBtn.disabled = true;
 
            try {
                await api.favorites.removeFromFavorites(Number(favourBtn.dataset.bookId));
 
                const card = favourBtn.closest('.book');
                if (card) card.remove();
 
                if (!favouritesList.querySelector('.book')) {
                    showEmptyFavourites();
                }
            } catch (error) {
                alert(error.message || 'Не удалось удалить книгу');
                favourBtn.disabled = false;
            }
        });
    }
}
 