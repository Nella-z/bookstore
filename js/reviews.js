const reviewsWrapper = document.getElementById('reviews-wrapper');

function createReviewCard(review) {
    const book = review.book;
    if (!book) return '';
    
    const likeImg = review.myVote === 'like' ? 'images/like-yes.svg' : 'images/like.svg';
    const dislikeImg = review.myVote === 'dislike' ? 'images/dislike-yes.svg' : 'images/dislike.svg';
    
    return `
        <div class="swiper-slide" data-id="${review.id}" data-book-id="${review.bookId}">
            <div class="rv-card rv-card--active">
                <div class="rv-card__main">
                    <p class="rv-card__author">${review.author}</p>
                    <h3 class="rv-card__title">${book.title}</h3>
                    <p class="rv-card__text">${review.text}</p>
                </div>
                <div class="rv-card__divider"></div>
                <div class="rv-card__extra">
                    <div class="rv-card__book">
                        <img src="${book.coverUrl}" alt="Обложка книги">
                    </div>
                    <div class="rv-card__actions">
                        <p>Понравился отзыв?</p>
                        <div class="rv-card__reactions" data-voted="${review.myVote || ''}">
                            <button class="like-btn"><img src="${likeImg}" alt="Лайк"><span>${review.likes}</span></button>
                            <button class="dislike-btn"><img src="${dislikeImg}" alt="Дизлайк"><span>${review.dislikes}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

async function renderReviews() {
    if (!reviewsWrapper) return;
    
    try {
        reviewsWrapper.innerHTML = '<p>Загрузка...</p>';
        
        let response;
        if (reviewsWrapper.dataset.page === 'home') {
            response = await api.reviews.getTopReviews(3);
        } else { 
            const bookId = reviewsWrapper.dataset.bookId || new URLSearchParams(window.location.search).get('id');
            if (!bookId) {
                reviewsWrapper.innerHTML = '<p>Отзывы не найдены</p>';
                return;
            }

            const [currentBook, reviewsResponse] = await Promise.all([
                api.books.getBookById(bookId),
                api.reviews.getReviews(bookId)
            ]);

            response = {
                items: (reviewsResponse.items || [])
                    .slice(0, 5)
                    .map(review => ({ ...review, book: currentBook }))
            };
        }

        const reviews = response.items || [];
        
        if (reviews.length === 0) {
            reviewsWrapper.innerHTML = '<p>Отзывов пока нет</p>';
        } else {
            reviewsWrapper.innerHTML = reviews.map(createReviewCard).join('');
            
            // Ключевое исправление: пересоздаем слайдер после вставки HTML
            if (typeof initReviewsSlider === 'function') {
                initReviewsSlider();
            }
        }
    } catch (error) {
        console.error(error);
        reviewsWrapper.innerHTML = '<p>Ошибка загрузки отзывов</p>';
    }
}

if (reviewsWrapper) {
    renderReviews();
    
    reviewsWrapper.addEventListener('click', async function(event) {
        const likeBtn = event.target.closest('.like-btn');
        const dislikeBtn = event.target.closest('.dislike-btn');
        
        if (!likeBtn && !dislikeBtn) return;
        
        if (typeof token !== 'undefined' && !token.exists()) {
            window.location.href = 'input.html';
            return;
        }
        
        const card = event.target.closest('.swiper-slide');
        const reviewId = Number(card.dataset.id);
        const clickedType = likeBtn ? 'like' : 'dislike';
        
        try {
            const result = await api.reviews.voteReview(reviewId, clickedType);

            document.querySelectorAll(`.swiper-slide[data-id="${reviewId}"]`).forEach(slide => {
                const likeEl = slide.querySelector('.like-btn');
                const dislikeEl = slide.querySelector('.dislike-btn');

                likeEl.querySelector('span').textContent = result.likes;
                dislikeEl.querySelector('span').textContent = result.dislikes;

                likeEl.querySelector('img').src = result.currentUserVote === 'like'
                    ? 'images/like-yes.svg' : 'images/like.svg';
                dislikeEl.querySelector('img').src = result.currentUserVote === 'dislike'
                    ? 'images/dislike-yes.svg' : 'images/dislike.svg';

                slide.querySelector('.rv-card__reactions').dataset.voted = result.currentUserVote || '';
            });
        } catch (error) {
            console.error(error);
            alert(error.message || 'Не удалось проголосовать');
        }
    });
}