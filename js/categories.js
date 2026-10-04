let categories = [
    { main: "Фэнтези", slug: "fentezi",
         sub: [
            { name: "Тёмное фэнтези", slug: "temnoe" },
            { name: "Юмористическое фэнтези", slug: "yumoristicheskoe" },
            { name: "Городское фэнтези", slug: "gorodskoe" },
            { name: "Фэнтези про попаданцев", slug: "popadantsy" },
            { name: "Романтическое фэнтези", slug: "romanticheskoe-fentezi" }
        ]  },
    { main: "Фантастика", slug: "fantastika", 
         sub: [ 
            { name: "Киберпанк", slug: "kiberpank" },
            { name: "Постапокалипсис", slug: "postapokalipsis" },
            { name: "Антиутопия", slug: "antiutopiya" }
        ]},
    { main: "Детектив", slug: "detektiv",
        sub: [ 
            { name: "Классический детектив", slug: "klassicheskiy" },
            { name: "Психологический детектив", slug: "psihologicheskiy-detektiv" },
            { name: "Криминальный триллер", slug: "triller" }
        ]},
    { main: "Романтика", slug: "romantica", 
         sub: [ 
            { name: "Современная романтика", slug: "sovremennaya" },
            { name: "Исторический любовный роман", slug: "istoricheskiy-roman" },
            { name: "Романтическая комедия", slug: "komediya" }
        ]},
    { main: "Ужасы", slug: "horrors",
        sub: [ 
            { name: "Мистический хоррор", slug: "mistika" },
            { name: "Психологический хоррор", slug: "psihologicheskiy-horror" },
            { name: "Городские легенды", slug: "gorodskie-legendy" }
        ] },
    { main: "Классика", slug: "classic", 
        sub: [ 
            { name: "Русская классика", slug: "russkaya" },
            { name: "Зарубежная классика", slug: "zarubezhnaya" },
            { name: "Античная классика", slug: "antichnaya" },
            { name: "Классика XX века", slug: "xx-vek" },
            { name: "Поэзия", slug: "poeziya" }
        ] }
];

const slugToRussian = {};
categories.forEach(cat => {
    slugToRussian[cat.slug] = cat.main;
    cat.sub.forEach(sub => {
        slugToRussian[sub.slug] = sub.name;
    });
});

function filterBooksByURL(books, categorySlug, filterSlug) {
    if (!categorySlug && !filterSlug) {
        return books;
    }
    const categoryRussian = slugToRussian[categorySlug];
    const filterRussian = slugToRussian[filterSlug];

    return books.filter(book => {
        const bookCategory = book.categories[0];
        const categoryMatch = !categoryRussian || 
        bookCategory.main.trim() === categoryRussian;

        const filterMatch = !filterRussian || 
            bookCategory.sub.trim() === filterRussian;
        return categoryMatch && filterMatch;
    });
}

function updateCatalogInfo(filteredBooks, categorySlug) {
    const titleElement = document.getElementById('catalog__title');
    if (titleElement) {
        if (categorySlug) {
            const categoryName = slugToRussian[categorySlug];
            titleElement.textContent = categoryName;
        } else {
            titleElement.textContent = 'Каталог';
        }
    }
    
    const countElement = document.getElementById('books-count');
    if (countElement) {
        countElement.textContent = `Найдено ${filteredBooks.length} книг`;
    }
}

function paginateBooks(books, currentPage, booksPerPage = 18) {
    const totalPages = Math.ceil(books.length / booksPerPage);
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;

    return {
        booksToShow: books.slice(startIndex, endIndex),
        totalPages: totalPages,
        currentPage: currentPage
    };
}

function renderPagination(totalPages, currentPage, urlParams) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;

    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }

    paginationContainer.style.display = '';

    let html = '';

    if (currentPage > 1) {
        html += `<a href="?${buildQueryString(urlParams, currentPage - 1)}" class="pagination__item">‹</a>`;
    }
    
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'is-active' : '';
        const ariaCurrent = i === currentPage ? 'aria-current="page"' : '';
        html += `<a href="?${buildQueryString(urlParams, i)}" class="pagination__item ${activeClass}" ${ariaCurrent}>${i}</a>`;
    }
    
    if (currentPage < totalPages) {
        html += `<a href="?${buildQueryString(urlParams, currentPage + 1)}" class="pagination__item">›</a>`;
    }
    
    paginationContainer.innerHTML = html;
}

function buildQueryString(urlParams, page) {
    const params = new URLSearchParams(urlParams);
    params.set('page', page);
    return params.toString();
}

function renderSubcategories(categorySlug, activeFilterSlug) {
    const containers = [
        document.getElementById('subcategories-list'),
        document.getElementById('subcategories-list-desk')
    ];

    containers.forEach(container => {
        if (!container) return;

        let html = '';

        if (categorySlug) {
            const category = categories.find(c => c.slug === categorySlug);
            if (category) {
                category.sub.forEach(sub => {
                    const isChecked = sub.slug === activeFilterSlug ? 'checked' : '';
                    html += `
                        <label class="checkbox__item">
                            <input type="checkbox" class="checkbox__input" value="${sub.slug}" data-sub="${sub.name}" ${isChecked}>
                            <span class="checkbox__box"></span>
                            <span class="checkbox__text">${sub.name}</span>
                        </label>
                    `;
                });
            }
        } else {
            categories.forEach(cat => {
                html += `<p class="filtr__label" style="margin-top: 10px;">${cat.main}</p>`;
                cat.sub.forEach(sub => {
                    const isChecked = sub.slug === activeFilterSlug ? 'checked' : '';
                    html += `
                        <label class="checkbox__item">
                            <input type="checkbox" class="checkbox__input" value="${sub.slug}" data-sub="${sub.name}" ${isChecked}>
                            <span class="checkbox__box"></span>
                            <span class="checkbox__text">${sub.name}</span>
                        </label>
                    `;
                });
            });
        }

        container.innerHTML = html;
    });
}
function initPriceSlider() {
    // Вычисляем минимальную и максимальную цену по всем книгам
    const prices = books.map(b => b.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    // Настройки для обоих слайдеров (мобильный и десктопный)
    const sliders = [
        { min: 'priceMin', max: 'priceMax', minLabel: 'priceMinLabel', maxLabel: 'priceMaxLabel' },
        { min: 'priceMinDesk', max: 'priceMaxDesk', minLabel: 'priceMinLabelDesk', maxLabel: 'priceMaxLabelDesk' }
    ];
    
    sliders.forEach(slider => {
        const minInput = document.getElementById(slider.min);
        const maxInput = document.getElementById(slider.max);
        const minLabel = document.getElementById(slider.minLabel);
        const maxLabel = document.getElementById(slider.maxLabel);
        
        if (minInput && maxInput && minLabel && maxLabel) {
            // Устанавливаем пределы слайдеров
            minInput.min = minPrice;
            minInput.max = maxPrice;
            minInput.value = minPrice;
            maxInput.min = minPrice;
            maxInput.max = maxPrice;
            maxInput.value = maxPrice;
            
            // Отображаем значения
            minLabel.textContent = minPrice;
            maxLabel.textContent = maxPrice;
            
            // Обработчик для минимальной цены
            minInput.addEventListener('input', () => {
                let value = parseInt(minInput.value);
                if (value > parseInt(maxInput.value)) {
                    value = parseInt(maxInput.value);
                    minInput.value = value;
                }
                minLabel.textContent = value;
                
                // Синхронизируем с другим слайдером
                syncPriceSlider(slider.min, slider.max, slider.minLabel, slider.maxLabel, value, parseInt(maxInput.value));
                
                applyFilters();
            });
            
            maxInput.addEventListener('input', () => {
                let value = parseInt(maxInput.value);
                if (value < parseInt(minInput.value)) {
                    value = parseInt(minInput.value);
                    maxInput.value = value;
                }
                maxLabel.textContent = value;
                
                syncPriceSlider(slider.max, slider.min, slider.maxLabel, slider.minLabel, value, parseInt(minInput.value));
                
                applyFilters();
            });
        }
    });
}

function syncPriceSlider(changedInput, otherInput, changedLabel, otherLabel, changedValue, otherValue) {
    const otherSliders = [
        { min: 'priceMin', max: 'priceMax', minLabel: 'priceMinLabel', maxLabel: 'priceMaxLabel' },
        { min: 'priceMinDesk', max: 'priceMaxDesk', minLabel: 'priceMinLabelDesk', maxLabel: 'priceMaxLabelDesk' }
    ];
    
    otherSliders.forEach(slider => {
        if (slider.min !== changedInput && slider.max !== changedInput) {
            const otherSliderInput = document.getElementById(slider[changedInput.includes('Min') ? 'min' : 'max']);
            const otherSliderLabel = document.getElementById(slider[changedInput.includes('Min') ? 'minLabel' : 'maxLabel']);
            if (otherSliderInput && otherSliderLabel) {
                otherSliderInput.value = changedValue;
                otherSliderLabel.textContent = changedValue;
            }
        }
    });
}

function applyFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    const categorySlug = urlParams.get('category');
    const checkedFilters = Array.from(document.querySelectorAll('.checkbox__input:checked'))
        .map(input => input.value);
    
    const priceMinInput = document.getElementById('priceMin') || document.getElementById('priceMinDesk');
    const priceMaxInput = document.getElementById('priceMax') || document.getElementById('priceMaxDesk');
    const priceMin = parseInt(priceMinInput?.value) || 0;
    const priceMax = parseInt(priceMaxInput?.value) || Infinity;
    
    let filteredBooks = books;
    
    if (categorySlug) {
        filteredBooks = filteredBooks.filter(book => {
            const bookCategory = book.categories[0];
            return bookCategory.main.trim() === slugToRussian[categorySlug];
        });
    }
    
    if (checkedFilters.length > 0) {
        filteredBooks = filteredBooks.filter(book => {
            const bookSub = book.categories[0].sub.trim();
            const bookSubSlug = Object.keys(slugToRussian).find(key => slugToRussian[key] === bookSub);
            return checkedFilters.includes(bookSubSlug);
        });
    }
    
    filteredBooks = filteredBooks.filter(book => {
        return book.price >= priceMin && book.price <= priceMax;
    });
    
    urlParams.set('page', '1');
    const currentPage = 1;
    
    const { booksToShow, totalPages } = paginateBooks(filteredBooks, currentPage);
    const catalogContainer = document.getElementById('catalog__books');
if (catalogContainer) {
    if (filteredBooks.length === 0) {
       
        catalogContainer.innerHTML = '<p class="catalog__empty">В этом поджанре нет книг</p>';
        catalogContainer.style.width = '61vw';
    } else {
        const allBooksHTML = booksToShow.map(createBookCard).join('');
        catalogContainer.innerHTML = allBooksHTML;
    }
}
    

    
    updateCatalogInfo(filteredBooks, categorySlug);
    renderPagination(totalPages, currentPage, urlParams);
}

function initCatalog() {
    const urlParams = new URLSearchParams(window.location.search);
    const categorySlug = urlParams.get('category');
    const filterSlug = urlParams.get('filter');
    const currentPage = parseInt(urlParams.get('page')) || 1;
    
    renderSubcategories(categorySlug, filterSlug);
    initPriceSlider();

    const filteredBooks = filterBooksByURL(books, categorySlug, filterSlug);
    const { booksToShow, totalPages } = paginateBooks(filteredBooks, currentPage);
    
    const catalogContainer = document.getElementById('catalog__books');
   if (catalogContainer) {
    if (filteredBooks.length === 0) {
        catalogContainer.innerHTML = '<p class="catalog__empty">В этом поджанре нет книг</p>';
    } else {
        const allBooksHTML = booksToShow.map(createBookCard).join('');
        catalogContainer.innerHTML = allBooksHTML;
    }
}
    
    updateCatalogInfo(filteredBooks, categorySlug);
    renderPagination(totalPages, currentPage, urlParams);

    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('checkbox__input')) {
            applyFilters();
        }
    });
}

document.addEventListener('DOMContentLoaded', initCatalog);


