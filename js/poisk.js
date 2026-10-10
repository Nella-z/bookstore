const BOOK_DETAILS_PAGE = './product.html';

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

document.querySelectorAll('.poisk__input').forEach((input) => {
    const wrapper = input.closest('.header__poisk, .header__poisk_mini');
    const resultsList = wrapper?.querySelector('.search');

    if (!resultsList) return;

    resultsList.hidden = true;
    
    let lastRequestId = 0;

    const handleSearch = debounce(async () => {
        const query = input.value.trim();
        
        if (!query) {
            resultsList.replaceChildren();
            resultsList.hidden = true;
            return;
        }

        const requestId = ++lastRequestId;

        try {
            resultsList.replaceChildren();
            const loadingLi = document.createElement('li');
            loadingLi.textContent = 'Поиск...';
            resultsList.append(loadingLi);
            resultsList.hidden = false;

            const response = await api.books.getBooks({ search: query, pageSize: 8 });
            
            if (requestId !== lastRequestId) return;

            const matches = response.items || [];
            resultsList.replaceChildren(); 

            if (matches.length === 0) {
                const li = document.createElement('li');
                li.textContent = 'Ничего не найдено';
                resultsList.append(li);
            } else {
                matches.forEach((book) => {
                    const li = document.createElement('li');
                    const link = document.createElement('a');
                    link.textContent = book.title;
                    link.href = `${BOOK_DETAILS_PAGE}?id=${encodeURIComponent(book.id)}`;
                    li.append(link);
                    resultsList.append(li);
                });
            }
        } catch (error) {
            if (requestId !== lastRequestId) return;
            
            console.error(error);
            resultsList.replaceChildren();
            const li = document.createElement('li');
            li.textContent = 'Ошибка поиска';
            resultsList.append(li);
        }
    }, 400); 

    input.addEventListener('input', handleSearch);
    
    document.addEventListener('click', (e) => {
        if (wrapper && !wrapper.contains(e.target)) {
            resultsList.hidden = true;
        }
    });
});