function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
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

const catalogContainer = document.getElementById('catalog__books');
const titleElement = document.getElementById('catalog__title');
const countElement = document.getElementById('books-count');
const paginationContainer = document.getElementById('pagination');

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
                    html += `<label class="checkbox__item">
                        <input type="checkbox" class="checkbox__input" value="${sub.slug}" data-sub="${sub.name}" ${isChecked}>
                        <span class="checkbox__box"></span>
                        <span class="checkbox__text">${sub.name}</span>
                    </label>`;
                });
            }
        } else {
            categories.forEach(cat => {
                html += `<p class="filtr__label" style="margin-top: 10px;">${cat.main}</p>`;
                cat.sub.forEach(sub => {
                    const isChecked = sub.slug === activeFilterSlug ? 'checked' : '';
                    html += `<label class="checkbox__item">
                        <input type="checkbox" class="checkbox__input" value="${sub.slug}" data-sub="${sub.name}" ${isChecked}>
                        <span class="checkbox__box"></span>
                        <span class="checkbox__text">${sub.name}</span>
                    </label>`;
                });
            });
        }
        container.innerHTML = html;
    });
}
function initPriceSlider() {
    const prices = (typeof books !== 'undefined' && Array.isArray(books)) ? books.map(b => b.price) : [0, 10000];
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    const sliders = [
        { min: 'priceMin', max: 'priceMax', minLabel: 'priceMinLabel', maxLabel: 'priceMaxLabel' },
        { min: 'priceMinDesk', max: 'priceMaxDesk', minLabel: 'priceMinLabelDesk', maxLabel: 'priceMaxLabelDesk' }
    ];
    
    const urlParams = new URLSearchParams(window.location.search);

    sliders.forEach(slider => {
        const minInput = document.getElementById(slider.min);
        const maxInput = document.getElementById(slider.max);
        const minLabel = document.getElementById(slider.minLabel);
        const maxLabel = document.getElementById(slider.maxLabel);
        
        if (minInput && maxInput && minLabel && maxLabel) {
            minInput.min = minPrice; minInput.max = maxPrice;
            maxInput.min = minPrice; maxInput.max = maxPrice;
            
            const urlMin = urlParams.get('minPrice');
            const urlMax = urlParams.get('maxPrice');
            
            const startMin = urlMin ? Math.max(minPrice, parseInt(urlMin)) : minPrice;
            const startMax = urlMax ? Math.min(maxPrice, parseInt(urlMax)) : maxPrice;
            
            minInput.value = startMin;
            maxInput.value = startMax;
            minLabel.textContent = startMin;
            maxLabel.textContent = startMax;
            
            const onPriceChanged = debounce(() => {
                const params = new URLSearchParams(window.location.search);
                params.set('page', '1'); 
                params.set('minPrice', minInput.value);
                params.set('maxPrice', maxInput.value);
                window.history.replaceState({}, '', `?${params.toString()}`);
                renderCatalog();
            }, 500);

            minInput.addEventListener('input', () => {
                let value = parseInt(minInput.value) || minPrice;
                if (value > parseInt(maxInput.value)) { 
                    value = parseInt(maxInput.value); 
                    minInput.value = value; 
                }
                minLabel.textContent = value;
                syncPriceSlider('min', value);
                onPriceChanged();
            });
            
            maxInput.addEventListener('input', () => {
                let value = parseInt(maxInput.value) || maxPrice;
                if (value < parseInt(minInput.value)) { 
                    value = parseInt(minInput.value); 
                    maxInput.value = value; 
                }
                maxLabel.textContent = value;
                syncPriceSlider('max', value);
                onPriceChanged();
            });
        }
    });
}

// Выставляет значения бегунков из адресной строки.
// Слушатели здесь НЕ вешаются (это делает initPriceSlider один раз),
// поэтому функцию можно безопасно вызывать при каждом popstate.
function setSlidersFromUrl() {
    const p = new URLSearchParams(window.location.search);
    const urlMin = p.get('minPrice');
    const urlMax = p.get('maxPrice');

    [
        ['priceMin', 'priceMinLabel', urlMin],
        ['priceMax', 'priceMaxLabel', urlMax],
        ['priceMinDesk', 'priceMinLabelDesk', urlMin],
        ['priceMaxDesk', 'priceMaxLabelDesk', urlMax]
    ].forEach(([inputId, labelId, urlValue]) => {
        const input = document.getElementById(inputId);
        const label = document.getElementById(labelId);
        if (!input || !label) return;

        const value = urlValue
            ? parseInt(urlValue)
            : (inputId.includes('Min') ? input.min : input.max);
        input.value = value;
        label.textContent = value;
    });
}

function syncPriceSlider(changedType, newValue) {
    const pairs = [
        { min: 'priceMin', max: 'priceMax', minLabel: 'priceMinLabel', maxLabel: 'priceMaxLabel' },
        { min: 'priceMinDesk', max: 'priceMaxDesk', minLabel: 'priceMinLabelDesk', maxLabel: 'priceMaxLabelDesk' }
    ];
    
    pairs.forEach(pair => {
        const inputId = changedType === 'min' ? pair.min : pair.max;
        const labelId = changedType === 'min' ? pair.minLabel : pair.maxLabel;
        
        const input = document.getElementById(inputId);
        const label = document.getElementById(labelId);
        
        if (input && label) {
            input.value = newValue;
            label.textContent = newValue;
        }
    });
}

function getFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    const priceMinInput = document.getElementById('priceMin') || document.getElementById('priceMinDesk');
    const priceMaxInput = document.getElementById('priceMax') || document.getElementById('priceMaxDesk');
    
    return {
        category: urlParams.get('category') || undefined,
        filter: urlParams.get('filter') || undefined,
        minPrice: priceMinInput?.value || undefined,
        maxPrice: priceMaxInput?.value || undefined,
        page: parseInt(urlParams.get('page')) || 1,
        pageSize: 18
    };
}

let lastRenderId = 0;

async function renderCatalog() {
    if (!catalogContainer) return;
    
    const requestId = ++lastRenderId;
    
    try {
        catalogContainer.innerHTML = '<p>Загрузка...</p>';
        const filters = getFilters();
        const response = await api.books.getBooks(filters);
        if (requestId !== lastRenderId) return;
        
        const booksToShow = response.items || [];
        const total = response.total || 0;
        const currentPage = response.page || 1;
        const totalPages = Math.ceil(total / (response.pageSize || 18));

        if (titleElement) {
            titleElement.textContent = filters.category ? (slugToRussian[filters.category] || 'Каталог') : 'Каталог';
        }
        if (countElement) {
            countElement.textContent = `Найдено ${total} книг`;
        }

        if (booksToShow.length === 0) {
            catalogContainer.innerHTML = '<p class="catalog__empty">Книги не найдены</p>';
            catalogContainer.style.width = '61vw';
        } else {
            catalogContainer.style.width = '';
            catalogContainer.innerHTML = booksToShow.map(createBookCard).join('');
    
            if (typeof markFavourites === 'function') {
                markFavourites();
            }
        }

        renderPagination(totalPages, currentPage, filters);

    } catch (error) {
        if (requestId !== lastRenderId) return;
        console.error(error);
        catalogContainer.innerHTML = '<p>Ошибка загрузки каталога</p>';
    }
}

function renderPagination(totalPages, currentPage, filters) {
    if (!paginationContainer) return;

    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }

    paginationContainer.style.display = '';
    let html = '';

    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    if (filters.filter) params.set('filter', filters.filter);
    if (filters.minPrice) params.set('minPrice', filters.minPrice);
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);

    if (currentPage > 1) {
        params.set('page', currentPage - 1);
        html += `<a href="?${params.toString()}" class="pagination__item">‹</a>`;
    }
    
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'is-active' : '';
        const ariaCurrent = i === currentPage ? 'aria-current="page"' : '';
        params.set('page', i);
        html += `<a href="?${params.toString()}" class="pagination__item ${activeClass}" ${ariaCurrent}>${i}</a>`;
    }
    
    if (currentPage < totalPages) {
        params.set('page', currentPage + 1);
        html += `<a href="?${params.toString()}" class="pagination__item">›</a>`;
    }
    
    paginationContainer.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categorySlug = urlParams.get('category');
    const filterSlug = urlParams.get('filter');

    renderSubcategories(categorySlug, filterSlug);
    initPriceSlider();
    renderCatalog();

    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('checkbox__input')) {
            if (e.target.checked) {
                document.querySelectorAll('.checkbox__input').forEach(cb => {
                    if (cb !== e.target) cb.checked = false;
                });
            }

            const currentParams = new URLSearchParams(window.location.search);
            if (e.target.checked) {
                currentParams.set('filter', e.target.value);
            } else {
                currentParams.delete('filter');
            }
            currentParams.set('page', '1');
            
            window.history.pushState({}, '', `?${currentParams.toString()}`);
            renderCatalog();
        }
    });

    window.addEventListener('popstate', () => {
        const p = new URLSearchParams(window.location.search);
        renderSubcategories(p.get('category'), p.get('filter'));
        setSlidersFromUrl();
        renderCatalog();
    });
});