let reviews = [
  {
    id: 1,
     bookId: 1,
      author:  "Маркина Яна Ильична",
       text: "Книга превзошла мои ожидания. Сюжет закручен так, что невозможно оторваться до самой последней страницы. Рекомендую всем, кто любит качественные истории с глубоким смыслом.",
        likes: 6,
         dislikes: 1
     },
  {
    id: 2,
     bookId: 13,
      author: "Родин Роман Исаевич",
       text: "Очень сильное и эмоциональное чтение. Персонажи прописаны настолько реалистично, что их переживания воспринимаешь как свои. После прочтения еще долго не отпускает.",
        likes: 3,
         dislikes: 0
     },
      {
    id: 3,
     bookId: 8,
      author: "Шилова Анна Лукична",
       text: "Прекрасный слог и удивительная атмосфера. Автор умеет подметить важные детали и передать настроение. Это тот случай, когда каждая страница приносит искреннее удовольствие.",
        likes: 7,
         dislikes: 4
     },
      {
    id: 4,
     bookId: 44,
      author: "Ус Ян Ильич",
       text: "Читал на одном дыхании, вечерами не мог оторваться. История получилась живой, динамичной и очень увлекательной. Обязательно перечитаю в будущем.",
        likes: 2,
         dislikes: 1
     },
      {
    id: 5,
     bookId: 10,
      author: "Зубков Артём Лукич",
       text: "Глубокое произведение, которое заставляет задуматься о многом. Несмотря на внешнюю простоту, в нем скрыто много важных деталей и философских размышлений. Отличная находка для вдумчивого читателя.",
        likes: 11,
         dislikes: 2
     },
      {
    id: 6,
     bookId: 54,
      author: "Маркина Яна Ильична",
       text: "Замечательное чтение для свободного времени. Сюжет развивается стремительно, а развязка приятно удивляет. Автор определенно знает, как удержать интригу до самого конца.",
        likes: 5,
         dislikes: 3
     },
      {
    id: 7,
     bookId: 45,
      author: "Родин Роман Исаевич",
       text: "Искренняя и трогательная история. Она вызывает бурю эмоций: от легкой грусти до искренней радости за героев. Советую взять в дорогу или на выходные.",
        likes: 4,
         dislikes: 3
     },
      {
    id: 8,
     bookId: 32,
      author: "Шилова Анна Лукична",
       text: "Свежий взгляд на привычные вещи. Книга читается легко, но оставляет после себя пищу для размышлений. Одно из лучших произведений, что мне доводилось читать в этом году.",
        likes: 3,
         dislikes: 1
     },
      {
    id: 9,
     bookId: 23,
      author: "Ус Ян Ильич",
       text: "Удивительно атмосферное произведение, которое запоминается надолго. Автор мастерски выстраивает повествование, не оставляя читателя равнодушным. Смело берите в свою коллекцию.",
        likes: 1,
         dislikes: 1
     },
 
];
const shuffled = [...reviews];
shuffled.sort(() => Math.random() - 0.5);
const randomThree = shuffled.slice(0, 5);

function createReviewCard(review, book) {
    return `
           <div class="swiper-slide" data-id="${review.id}" 
    data-book-id="${review.bookId}">
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
                                    <div class="rv-card__reactions" data-voted="">
                                       <button class="like-btn"><img src="images/like.svg" alt=""><span>${review.likes}</span></button>
        <button class="dislike-btn"><img src="images/dislike.svg" alt=""><span>${review.dislikes}</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `;};

const reviewsWrapper = document.getElementById('reviews-wrapper');

if (reviewsWrapper.dataset.page === 'home') {
    const topReviews = reviews
        .map(review => ({
            review,
            book: books.find(
                item => Number(item.id) === Number(review.bookId)
            )
        }))
        .filter(item => item.book)
        .sort((a, b) => b.review.likes - a.review.likes)
        .slice(0, 3);

    reviewsWrapper.innerHTML = topReviews
        .map(({ review, book }) => createReviewCard(review, book))
        .join('');
} else {
    reviewsWrapper.innerHTML = randomThree
        .map(review => createReviewCard(review, book))
        .join('');
}
document.getElementById('reviews-wrapper').addEventListener('click', function(event) {
    const likeBtn = event.target.closest('.like-btn');
    const dislikeBtn = event.target.closest('.dislike-btn');

    if (!likeBtn && !dislikeBtn) return;

    const card = event.target.closest('.swiper-slide');
    const reviewId = Number(card.dataset.id);
    const review = reviews.find(r => r.id === reviewId);
    if (!review) return;

    const reactions = card.querySelector('.rv-card__reactions');
    const cardLikeBtn = card.querySelector('.like-btn');
    const cardDislikeBtn = card.querySelector('.dislike-btn');

    const currentVote = reactions.dataset.voted; 
    const clickedType = likeBtn ? 'like' : 'dislike';

    if (currentVote === '') {
        if (likeBtn) {
            cardLikeBtn.querySelector('img').src = 'images/like-yes.svg';
            cardLikeBtn.querySelector('span').textContent = ++review.likes;
        } else {
            cardDislikeBtn.querySelector('img').src = 'images/dislike-yes.svg';
            cardDislikeBtn.querySelector('span').textContent = ++review.dislikes;
        }
        reactions.dataset.voted = clickedType;

    } else if (currentVote === clickedType) {
        if (likeBtn) {
            cardLikeBtn.querySelector('img').src = 'images/like.svg';
            cardLikeBtn.querySelector('span').textContent = --review.likes;
        } else {
            cardDislikeBtn.querySelector('img').src = 'images/dislike.svg';
            cardDislikeBtn.querySelector('span').textContent = --review.dislikes;
        }
        reactions.dataset.voted = '';

    } else {
        if (currentVote === 'like') {
            cardLikeBtn.querySelector('img').src = 'images/like.svg';
            cardLikeBtn.querySelector('span').textContent = --review.likes;
        } else {
            cardDislikeBtn.querySelector('img').src = 'images/dislike.svg';
            cardDislikeBtn.querySelector('span').textContent = --review.dislikes;
        }

        if (clickedType === 'like') {
            cardLikeBtn.querySelector('img').src = 'images/like-yes.svg';
            cardLikeBtn.querySelector('span').textContent = ++review.likes;
        } else {
            cardDislikeBtn.querySelector('img').src = 'images/dislike-yes.svg';
            cardDislikeBtn.querySelector('span').textContent = ++review.dislikes;
        }
        reactions.dataset.voted = clickedType;
    }
});
