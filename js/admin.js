
function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function plainText(value) {
    return String(value ?? '').replace(/<br\s*\/?>/gi, ' ').replace(/\s+/g, ' ').trim();
}

async function loadAllBooks() {
    const all = [];
    let page = 1;

    while (page < 200) {
        const response = await api.books.getBooks({ page, pageSize: 50 });
        const items = response.items || [];
        all.push(...items);

        if (items.length === 0 || all.length >= (response.total || 0)) break;
        page++;
    }

    return all;
}

function initAdminHeader() {
    document.querySelectorAll('.input__header').forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();
            await api.auth.logout();
            window.location.href = 'input.html';
        });
    });
}

function createAdminBookCard(book) {
    const category = book.categories && book.categories[0];
    const categoryText = category ? `${category.main} / ${category.sub}` : '';

    return `
        <div class="admin-book-card" data-id="${book.id}" style="display: flex; gap: 20px; align-items: center; border: 1px solid #eee; padding: 15px; margin-bottom: 15px; border-radius: 8px;">
            <img src="${escapeHtml(book.coverUrl)}" alt="${escapeHtml(book.title)}" style="width: 80px; height: 110px; object-fit: cover; border-radius: 4px;">
            <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                    <span style="color: #f5a623; font-weight: bold;">${escapeHtml(book.rating)}</span>
                    <h3 style="margin: 0; font-size: 18px;">${escapeHtml(book.title)}</h3>
                </div>
                <p style="margin: 0; color: #666;">${escapeHtml(book.author)}</p>
                ${categoryText ? `<p style="margin: 3px 0 0 0; font-size: 14px; color: #999;">${escapeHtml(categoryText)}</p>` : ''}
                <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold; color: #290247;">${escapeHtml(book.price)}₽</p>
            </div>
            <button type="button" class="admin-delete-btn" data-id="${book.id}" style="padding: 8px 16px; background: #ff4d4f; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Удалить</button>
        </div>
    `;
}

async function initAdminBooksPage() {
    const container = document.getElementById('admin-books-list');
    if (!container) return;

    try {
        container.innerHTML = '<p>Загрузка...</p>';
        const list = await loadAllBooks();

        container.innerHTML = list.length
            ? list.map(createAdminBookCard).join('')
            : '<p>Книги не найдены. Добавьте первую!</p>';
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p>Ошибка загрузки книг</p>';
    }

    container.addEventListener('click', async (event) => {
        const deleteBtn = event.target.closest('.admin-delete-btn');
        if (!deleteBtn) return;

        if (!confirm('Удалить эту книгу из каталога?')) return;

        deleteBtn.disabled = true;

        try {
            await api.admin.deleteBook(Number(deleteBtn.dataset.id));

            deleteBtn.closest('.admin-book-card').remove();

            if (!container.querySelector('.admin-book-card')) {
                container.innerHTML = '<p>Книги не найдены. Добавьте первую!</p>';
            }
        } catch (error) {
            alert(error.message || 'Не удалось удалить книгу');
            deleteBtn.disabled = false;
        }
    });
}

function createAdminStockCard(stock) {
    return `
        <div class="admin-stock-card" data-id="${stock.id}" style="display: flex; gap: 20px; align-items: center; border: 1px solid #eee; padding: 15px; margin-bottom: 15px; border-radius: 8px; background: white;">
            <img src="images/stock.jpg" alt="Акция" style="width: 100px; height: 100px; object-fit: cover; border-radius: 4px; background: #f0f0f0;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 5px 0; font-size: 18px;">${escapeHtml(stock.theme)}</h3>
                <p style="margin: 0 0 5px 0; color: #666;">${escapeHtml(plainText(stock.booksText))}</p>
                <p style="margin: 0; font-weight: bold; color: #e74c3c; font-size: 20px;">-${escapeHtml(stock.discountPercent)}%</p>
            </div>
            <button type="button" class="admin-delete-btn" data-id="${stock.id}" style="padding: 8px 16px; background: #ff4d4f; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Удалить</button>
        </div>
    `;
}

async function initAdminStocksPage() {
    const container = document.getElementById('admin-stocks-list');
    if (!container) return;

    try {
        container.innerHTML = '<p>Загрузка...</p>';
        const stocks = await api.promotions.getPromotions();

        container.innerHTML = stocks && stocks.length
            ? stocks.map(createAdminStockCard).join('')
            : '<p>Акций пока нет. Добавьте первую!</p>';
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p>Ошибка загрузки акций</p>';
    }

    container.addEventListener('click', async (event) => {
        const deleteBtn = event.target.closest('.admin-delete-btn');
        if (!deleteBtn) return;

        if (!confirm('Вы уверены, что хотите удалить эту акцию?')) return;

        deleteBtn.disabled = true;

        try {
            await api.admin.deletePromotion(Number(deleteBtn.dataset.id));
            deleteBtn.closest('.admin-stock-card').remove();

            if (!container.querySelector('.admin-stock-card')) {
                container.innerHTML = '<p>Акций пока нет. Добавьте первую!</p>';
            }
        } catch (error) {
            alert(error.message || 'Не удалось удалить акцию');
            deleteBtn.disabled = false;
        }
    });
}

function initAddStockPage() {
    const form = document.getElementById('stock-form');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const theme = document.getElementById('stock-theme').value.trim();
        const booksText = document.getElementById('stock-books').value.trim();
        const discountPercent = Number(document.getElementById('stock-discount').value);

        if (!theme || !booksText) {
            alert('Заполните все поля');
            return;
        }

        const submitBtn = form.querySelector('[type="submit"]');
        submitBtn.disabled = true;

        try {
            await api.admin.createPromotion({ theme, booksText, discountPercent });
            alert('Акция успешно добавлена!');
            window.location.href = 'admin_stocks.html';
        } catch (error) {
            alert(error.message || 'Не удалось добавить акцию');
            submitBtn.disabled = false;
        }
    });
}

async function initAddBookPage() {
    const form = document.getElementById('book-form');
    if (!form) return;

    const categorySelect = document.getElementById('book-category');
    const subcategorySelect = document.getElementById('book-subcategory');
    const promoSelect = document.getElementById('book-promo');
    const coverInput = document.getElementById('book-cover-input');
    const coverFileName = document.getElementById('cover-file-name');

    let categoriesList = [];
    try {
        categoriesList = await api.books.getCategories();
    } catch (error) {
        console.error(error);
        alert('Не удалось загрузить список жанров. Обновите страницу.');
    }

    categorySelect.innerHTML = categoriesList
        .map(category => `<option value="${escapeHtml(category.main)}">${escapeHtml(category.main)}</option>`)
        .join('');

    function fillSubcategories() {
        const category = categoriesList.find(c => c.main === categorySelect.value);
        const subs = category ? category.sub : [];
        subcategorySelect.innerHTML = subs
            .map(sub => `<option value="${escapeHtml(sub.name)}">${escapeHtml(sub.name)}</option>`)
            .join('');
    }

    fillSubcategories();
    categorySelect.addEventListener('change', fillSubcategories);

    try {
        const promos = await api.promotions.getPromotions();
        promoSelect.innerHTML = '<option value="">Нет</option>' + (promos || [])
            .map(promo => `<option value="${promo.id}">${escapeHtml(plainText(promo.theme))} (-${escapeHtml(promo.discountPercent)}%)</option>`)
            .join('');
    } catch (error) {
        console.error(error);
    }

    if (coverInput && coverFileName) {
        coverInput.addEventListener('change', () => {
            const file = coverInput.files[0];
            coverFileName.textContent = file ? file.name : '';
        });
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const file = coverInput && coverInput.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Обложка должна быть изображением');
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                alert('Файл обложки слишком большой (максимум 2 МБ)');
                return;
            }
        }

        const price = Number(document.getElementById('book-price').value);
        const pages = Number(document.getElementById('prod-pages').value);
        if (!(price > 0)) {
            alert('Укажите цену больше нуля');
            return;
        }
        if (!(pages > 0)) {
            alert('Укажите количество страниц больше нуля');
            return;
        }

        const promoValue = promoSelect.value;

        const bookData = {
            title: document.getElementById('name__book').value.trim(),
            author: document.getElementById('avtor__book').value.trim(),
            price,
            publisher: document.getElementById('prod-publisher').value.trim(),
            series: document.getElementById('prod-series').value.trim(),
            year: Number(document.getElementById('prod-year').value),
            isbn: document.getElementById('prod-isbn').value.trim(),
            pages,
            size: document.getElementById('prod-size').value.trim(),
            coverType: document.getElementById('prod-cover').value.trim(),
            circulation: Number(document.getElementById('prod-circulation').value),
            weight: Number(document.getElementById('prod-weight').value),
            ageRestriction: document.getElementById('age-restriction').value,
            description: document.getElementById('book-page__text').value.trim(),
            categories: [{ main: categorySelect.value, sub: subcategorySelect.value }],
            promotionId: promoValue ? Number(promoValue) : null
        };

        const submitBtn = form.querySelector('[type="submit"]');
        submitBtn.disabled = true;

        try {
            const created = await api.admin.createBook(bookData);

            if (file) {
                try {
                    await api.admin.uploadBookCover(created.id, file);
                } catch (coverError) {
                    alert('Книга добавлена, но обложку загрузить не удалось: ' + coverError.message);
                    window.location.href = 'admin_books.html';
                    return;
                }
            }

            alert('Книга успешно добавлена!');
            window.location.href = 'admin_books.html';
        } catch (error) {
            // если сервер вернул ошибки по полям, показываем их списком
            const fieldErrors = error.errors ? Object.values(error.errors).flat().join('\n') : '';
            alert(fieldErrors || error.message || 'Не удалось добавить книгу');
            submitBtn.disabled = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    document.body.style.visibility = 'hidden';

    try {
        const admin = await api.auth.requireAdmin();
        if (!admin) return; 

        document.body.style.visibility = '';

        initAdminHeader();
        initAdminBooksPage();
        initAdminStocksPage();
        initAddStockPage();
        initAddBookPage();
    } catch (error) {
        console.error(error);
        document.body.style.visibility = '';
    }
});