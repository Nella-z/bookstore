const BOOK_DETAILS_PAGE = './product.html'; 

document.querySelectorAll('.poisk__input').forEach((input) => {
  const wrapper = input.closest('.poisk_ul, .header__poisk_mini');
  const resultsList = wrapper?.querySelector('.search');

  if (!resultsList) return;

  resultsList.hidden = true;

  input.addEventListener('input', () => {
    const query = input.value.trim().toLocaleLowerCase('ru');
    resultsList.replaceChildren();

    if (!query) {
      resultsList.hidden = true;
      return;
    }

    const matches = defaultBooks.filter((book) =>
      book.title.toLocaleLowerCase('ru').includes(query)
    );

    if (matches.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'Ничего не найдено';
      resultsList.append(li);
    } else {
      matches.slice(0, 8).forEach((book) => {
        const li = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = book.title;
        link.href = `${BOOK_DETAILS_PAGE}?id=${encodeURIComponent(book.id)}`;

        li.append(link);
        resultsList.append(li);
      });
    }

    resultsList.hidden = false;
  });
});