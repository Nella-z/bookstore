
const API_CONFIG = {
    baseUrl: 'https://api.chitay-knigi.ru',
    useMock: true // поставь false
};

const token = {
    get() {
        return localStorage.getItem('token');
    },
    set(newToken) {
        localStorage.setItem('token', newToken);
    },
    remove() {
        localStorage.removeItem('token');
    },
    exists() {
        return !!this.get();
    }
};

async function request(path, options = {}) {
    const { redirectOn401 = true, ...fetchOptions } = options;

    const url = API_CONFIG.baseUrl + path;
    const headers = { ...fetchOptions.headers };

    if (token.exists()) {
        headers['Authorization'] = `Bearer ${token.get()}`;
    }

    let body = fetchOptions.body;
    if (body && !(body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(body);
    }

    let response;
    try {
        response = await fetch(url, { ...fetchOptions, headers, body });
    } catch (err) {
        throw new Error('Не удалось связаться с сервером. Проверьте интернет.');
    }

    if (response.ok) {
        if (response.status === 204) return null;
        return await response.json().catch(() => null);
    }

    const errorData = await response.json().catch(() => ({}));

    if (response.status === 401 && token.exists() && redirectOn401) {
        token.remove();
        window.location.href = 'input.html';
    }

    const error = new Error(errorData.message || 'Ошибка сервера');
    error.status = response.status;
    error.errors = errorData.errors || null;
    throw error;
}

function mockDelay(ms = 300) {
    if (!API_CONFIG.useMock) return Promise.resolve();
    return new Promise(resolve => setTimeout(resolve, ms));
}

function readJSON(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        return fallback;
    }
}

function writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function withoutPassword(user) {
    const { password, ...safeUser } = user;
    return safeUser;
}

function hasValue(v) {
    return v !== undefined && v !== null && v !== '';
}

function getMockBooks() {
    return readJSON('mockBooks', null) || books;
}

function saveMockBooks(list) {
    writeJSON('mockBooks', list);
}

const MOCK_ADMIN = {
    fio: 'Администратор',
    email: 'admin@chitay-knigi.ru',
    password: 'admin12345',
    phone: '',
    birth: '',
    city: '',
    role: 'admin',
    avatarUrl: null
};

function readMockUsers() {
    const users = readJSON('users', []);
    if (!users.some(u => u.email.toLowerCase() === MOCK_ADMIN.email)) {
        users.push({
            ...MOCK_ADMIN,
            id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1
        });
        writeJSON('users', users);
    }
    return users;
}
function assertMockAdmin() {
    const user = readJSON('currentUser', null);
    if (!user || user.role !== 'admin') {
        const error = new Error('Недостаточно прав');
        error.status = 403;
        throw error;
    }
}

function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Не удалось прочитать файл'));
        reader.readAsDataURL(file);
    });
}

function updateMockUser(updates) {
    const users = readJSON('users', []);
    const current = readJSON('currentUser', null);
    if (!current) throw new Error('Не авторизован');

    const index = users.findIndex(u => u.id === current.id);
    if (index === -1) throw new Error('Пользователь не найден');

    users[index] = { ...users[index], ...updates };
    writeJSON('users', users);

    const safeUser = withoutPassword(users[index]);
    writeJSON('currentUser', safeUser);
    return safeUser;
}

const authAPI = {
    async register(userData) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const users = readMockUsers();
            const email = userData.email.trim().toLowerCase();

            if (users.some(u => u.email.toLowerCase() === email)) {
                const error = new Error('Пользователь с такой почтой уже существует');
                error.errors = { email: ['Эта почта уже зарегистрирована'] };
                throw error;
            }

            const newUser = {
                id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
                fio: userData.fio,
                email: userData.email.trim(),
                password: userData.password,
                phone: userData.phone,
                birth: userData.birth,
                city: userData.city || '',
                role: 'user',
                avatarUrl: null
            };
            users.push(newUser);
            writeJSON('users', users);

            const safeUser = withoutPassword(newUser);
            token.set('mock-token-' + newUser.id);
            writeJSON('currentUser', safeUser);
            return safeUser;
        }

        const result = await request('/api/auth/register', {
            method: 'POST',
            body: userData,
            redirectOn401: false
        });
        token.set(result.token);
        return result.user;
    },

    async login(email, password) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const users = readMockUsers();
            const user = users.find(u =>
                u.email.toLowerCase() === email.toLowerCase() && u.password === password
            );

            if (!user) {
                throw new Error('Неверная почта или пароль');
            }

            const safeUser = withoutPassword(user);
            token.set('mock-token-' + user.id);
            writeJSON('currentUser', safeUser);
            return safeUser;
        }

        const result = await request('/api/auth/login', {
            method: 'POST',
            body: { email, password },
            redirectOn401: false
        });
        token.set(result.token);
        return result.user;
    },

    async logout() {
        token.remove();
        localStorage.removeItem('currentUser');
    },

    async getCurrentUser() {
        if (!token.exists()) return null;

        await mockDelay(100);

        if (API_CONFIG.useMock) {
            return readJSON('currentUser', null);
        }

        try {
            return await request('/api/auth/me', { redirectOn401: false });
        } catch (error) {
            if (error.status === 401) {
                token.remove();
                return null;
            }
            throw error;
        }
    },

    async updateProfile(userData) {
        await mockDelay();

        const allowed = ['fio', 'phone', 'birth', 'city'];
        const updates = {};
        allowed.forEach(key => {
            if (userData[key] !== undefined) updates[key] = userData[key];
        });

        if (API_CONFIG.useMock) {
            return updateMockUser(updates);
        }

        return await request('/api/users/me', {
            method: 'PUT',
            body: updates
        });
    },
    async requireAdmin() {
        const user = await authAPI.getCurrentUser();
        if (!user || user.role !== 'admin') {
            window.location.href = 'input.html';
            return null;
        }
        return user;
    },

    async uploadAvatar(file) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const avatarUrl = await fileToDataUrl(file);
            updateMockUser({ avatarUrl });
            return { avatarUrl };
        }

        const formData = new FormData();
        formData.append('file', file);
        return await request('/api/users/me/avatar', {
            method: 'POST',
            body: formData
        });
    }
};

const booksAPI = {
    async getBooks(filters = {}) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            let result = [...getMockBooks()];

            if (filters.category) {
                const categoryName = slugToRussian[filters.category];
                if (categoryName) {
                    result = result.filter(b => b.categories[0].main.trim() === categoryName);
                }
            }

            if (filters.filter) {
                const subName = slugToRussian[filters.filter];
                if (subName) {
                    result = result.filter(b => b.categories[0].sub.trim() === subName);
                }
            }

            if (hasValue(filters.minPrice)) {
                result = result.filter(b => b.price >= Number(filters.minPrice));
            }
            if (hasValue(filters.maxPrice)) {
                result = result.filter(b => b.price <= Number(filters.maxPrice));
            }

            if (filters.search) {
                const searchLower = String(filters.search).toLowerCase();
                result = result.filter(b =>
                    b.title.toLowerCase().includes(searchLower) ||
                    b.author.toLowerCase().includes(searchLower)
                );
            }

            if (filters.comingSoon === true || filters.comingSoon === 'true') {
                result = result.filter(b => b.comingSoon);
            } else if (filters.comingSoon === false || filters.comingSoon === 'false') {
                result = result.filter(b => !b.comingSoon);
            }

            switch (filters.sort) {
                case 'price-asc':
                    result.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    result.sort((a, b) => b.price - a.price);
                    break;
                case 'rating-asc':
                    result.sort((a, b) => a.rating - b.rating);
                    break;
                case 'rating-desc':
                    result.sort((a, b) => b.rating - a.rating);
                    break;
                case 'popular':
                    result.sort((a, b) => b.cartCount - a.cartCount);
                    break;
                case 'hits':
                    result.sort((a, b) => b.favouriteCount - a.favouriteCount);
                    break;
            }

            const page = Number(filters.page) || 1;
            const pageSize = Number(filters.pageSize) || 18;
            const total = result.length;
            const start = (page - 1) * pageSize;
            const items = result.slice(start, start + pageSize);

            return { items, total, page, pageSize };
        }

        const params = new URLSearchParams();
        Object.keys(filters).forEach(key => {
            if (hasValue(filters[key])) {
                params.append(key, filters[key]);
            }
        });
        const query = params.toString();

        return await request(`/api/books${query ? '?' + query : ''}`);
    },

    async getBookById(id) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const book = getMockBooks().find(b => b.id === Number(id));
            if (!book) {
                const error = new Error('Книга не найдена');
                error.status = 404;
                throw error;
            }
            return book;
        }

        return await request(`/api/books/${id}`);
    },

    async getSimilarBooks(id) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const currentBook = getMockBooks().find(b => b.id === Number(id));
            if (!currentBook) return [];

            return getMockBooks()
                .filter(b =>
                    b.categories[0].sub === currentBook.categories[0].sub &&
                    b.id !== currentBook.id
                )
                .sort((a, b) => b.id - a.id)
                .slice(0, 4);
        }

        return await request(`/api/books/${id}/similar`);
    },

    async getCategories() {
        await mockDelay(100);

        if (API_CONFIG.useMock) {
            return categories;
        }

        return await request('/api/categories');
    }
};

const MOCK_PROMOCODES = {
    BOOK10: { type: 'percent', value: 10 },
    BOOK15: { type: 'percent', value: 15 },
    BOOK500: { type: 'fixed', value: 500 }
};

function getMockCartItems() {
    return readJSON('cartItems', [])
        .map(item => ({ ...item, book: getMockBooks().find(b => b.id === item.id) }))
        .filter(item => item.book);
}

function sumCart(items) {
    return items.reduce((sum, item) => sum + item.book.price * item.qty, 0);
}

function calcMockDiscount(code, total) {
    const cleanCode = String(code || '').trim().toUpperCase();
    if (!cleanCode) throw new Error('Введите промокод');

    const promo = MOCK_PROMOCODES[cleanCode];
    if (!promo) throw new Error('Промокод не найден');

    let discountAmount = promo.type === 'percent'
        ? Math.round(total * promo.value / 100)
        : promo.value;
    discountAmount = Math.min(discountAmount, total);

    return {
        code: cleanCode,
        discountPercent: promo.type === 'percent' ? promo.value : null,
        discountAmount,
        newTotal: total - discountAmount
    };
}

const cartAPI = {
    async getCart() {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const items = getMockCartItems();
            return { items, total: sumCart(items) };
        }

        return await request('/api/cart');
    },

    async addToCart(bookId, qty = 1) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const id = Number(bookId);
            const cart = readJSON('cartItems', []);
            const existing = cart.find(item => item.id === id);

            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ id, qty });
            }

            writeJSON('cartItems', cart);
            return { success: true };
        }

        return await request('/api/cart/items', {
            method: 'POST',
            body: { bookId, qty }
        });
    },

    async removeFromCart(bookId) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const id = Number(bookId);
            const cart = readJSON('cartItems', []).filter(item => item.id !== id);
            writeJSON('cartItems', cart);
            return { success: true };
        }

        return await request(`/api/cart/items/${bookId}`, {
            method: 'DELETE'
        });
    },

    async applyPromocode(code) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const total = sumCart(getMockCartItems());
            return calcMockDiscount(code, total);
        }

        return await request('/api/cart/promocode', {
            method: 'POST',
            body: { code }
        });
    },

    async createOrder(orderData = {}) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const items = getMockCartItems();
            if (items.length === 0) throw new Error('Корзина пуста');

            let total = sumCart(items);
            if (orderData.promoCode) {
                total = calcMockDiscount(orderData.promoCode, total).newTotal;
            }

            const orders = readJSON('orders', []);
            const date = new Date().toLocaleDateString('ru-RU');

            items.forEach(item => {
                orders.push({
                    id: Date.now() + Math.floor(Math.random() * 1000),
                    bookId: item.book.id,
                    qty: item.qty,
                    status: 'В пути',
                    address: orderData.address || '',
                    date
                });
            });

            writeJSON('orders', orders);
            writeJSON('cartItems', []);

            return {
                status: 'В пути',
                items: items.map(item => ({ book: item.book, qty: item.qty })),
                total
            };
        }

        return await request('/api/orders', {
            method: 'POST',
            body: orderData
        });
    },

    async getOrders() {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const items = readJSON('orders', [])
                .map(order => ({ ...order, book: getMockBooks().find(b => b.id === order.bookId) }))
                .filter(order => order.book);
            return { items };
        }

        return await request('/api/orders');
    }
};

const favoritesAPI = {
    async getFavorites() {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const favIds = readJSON('favourites', []);
            const items = favIds.map(id => getMockBooks().find(b => b.id === id)).filter(Boolean);
            return { items };
        }

        return await request('/api/favourites');
    },

    async addToFavorites(bookId) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const id = Number(bookId);
            const favIds = readJSON('favourites', []);
            if (!favIds.includes(id)) {
                favIds.push(id);
                writeJSON('favourites', favIds);
            }
            return { success: true };
        }

        return await request(`/api/favourites/${bookId}`, {
            method: 'POST'
        });
    },

    async removeFromFavorites(bookId) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const id = Number(bookId);
            const favIds = readJSON('favourites', []).filter(favId => favId !== id);
            writeJSON('favourites', favIds);
            return { success: true };
        }

        return await request(`/api/favourites/${bookId}`, {
            method: 'DELETE'
        });
    }
};

const MOCK_REVIEWS = [
    { id: 1, bookId: 1, author: "Маркина Яна Ильична", text: "Книга превзошла мои ожидания. Сюжет закручен так, что невозможно оторваться до самой последней страницы. Рекомендую всем, кто любит качественные истории с глубоким смыслом.", likes: 6, dislikes: 1 },
    { id: 2, bookId: 13, author: "Родин Роман Исаевич", text: "Очень сильное и эмоциональное чтение. Персонажи прописаны настолько реалистично, что их переживания воспринимаешь как свои. После прочтения еще долго не отпускает.", likes: 3, dislikes: 0 },
    { id: 3, bookId: 8, author: "Шилова Анна Лукична", text: "Прекрасный слог и удивительная атмосфера. Автор умеет подметить важные детали и передать настроение. Это тот случай, когда каждая страница приносит искреннее удовольствие.", likes: 7, dislikes: 4 },
    { id: 4, bookId: 44, author: "Ус Ян Ильич", text: "Читал на одном дыхании, вечерами не мог оторваться. История получилась живой, динамичной и очень увлекательной. Обязательно перечитаю в будущем.", likes: 2, dislikes: 1 },
    { id: 5, bookId: 10, author: "Зубков Артём Лукич", text: "Глубокое произведение, которое заставляет задуматься о многом. Несмотря на внешнюю простоту, в нем скрыто много важных деталей и философских размышлений. Отличная находка для вдумчивого читателя.", likes: 11, dislikes: 2 },
    { id: 6, bookId: 54, author: "Маркина Яна Ильична", text: "Замечательное чтение для свободного времени. Сюжет развивается стремительно, а развязка приятно удивляет. Автор определенно знает, как удержать интригу до самого конца.", likes: 5, dislikes: 3 },
    { id: 7, bookId: 45, author: "Родин Роман Исаевич", text: "Искренняя и трогательная история. Она вызывает бурю эмоций: от легкой грусти до искренней радости за героев. Советую взять в дорогу или на выходные.", likes: 4, dislikes: 3 },
    { id: 8, bookId: 32, author: "Шилова Анна Лукична", text: "Свежий взгляд на привычные вещи. Книга читается легко, но оставляет после себя пищу для размышлений. Одно из лучших произведений, что мне доводилось читать в этом году.", likes: 3, dislikes: 1 },
    { id: 9, bookId: 23, author: "Ус Ян Ильич", text: "Удивительно атмосферное произведение, которое запоминается надолго. Автор мастерски выстраивает повествование, не оставляя читателя равнодушным. Смело берите в свою коллекцию.", likes: 1, dislikes: 1 }
];
function decorateReview(review) {
    const votes = readJSON('reviewVotes', {});
    const myVote = votes[review.id] || '';
    return {
        ...review,
        likes: review.likes + (myVote === 'like' ? 1 : 0),
        dislikes: review.dislikes + (myVote === 'dislike' ? 1 : 0),
        myVote
    };
}

const reviewsAPI = {
    async getReviews(bookId) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const items = [...MOCK_REVIEWS]
                .sort(() => Math.random() - 0.5)
                .map(decorateReview);
            return { items };
        }

        return await request(`/api/reviews?bookId=${bookId}`);
    },

    async getTopReviews(limit = 3) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const items = MOCK_REVIEWS
                .map(decorateReview)
                .map(review => ({
                    ...review,
                    book: getMockBooks().find(b => b.id === review.bookId)
                }))
                .filter(review => review.book)
                .sort((a, b) => b.likes - a.likes)
                .slice(0, limit);
            return { items };
        }

        return await request(`/api/reviews/top?limit=${limit}`);
    },

    async voteReview(reviewId, voteType) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            const id = Number(reviewId);
            const review = MOCK_REVIEWS.find(r => r.id === id);
            if (!review) throw new Error('Отзыв не найден');

            const votes = readJSON('reviewVotes', {});
            if (votes[id] === voteType) {
                delete votes[id];
            } else {
                votes[id] = voteType;
            }
            writeJSON('reviewVotes', votes);

            const result = decorateReview(review);
            return {
                likes: result.likes,
                dislikes: result.dislikes,
                currentUserVote: result.myVote
            };
        }

        return await request(`/api/reviews/${reviewId}/${voteType}`, {
            method: 'POST'
        });
    }
};

const MOCK_STOCKS = [
    { id: 1, theme: "Увлекательные приключения", booksText: "на книги <br> про космос", discountPercent: 20 },
    { id: 2, theme: "Фантастические миры", booksText: "на книги <br> про фантастику", discountPercent: 10 },
    { id: 3, theme: "Детективные истории", booksText: "на книги <br> про детективы", discountPercent: 25 }
];

const promotionsAPI = {
    async getPromotions() {
        await mockDelay();

        if (API_CONFIG.useMock) {
            return readJSON('stocks', MOCK_STOCKS);
        }

        return await request('/api/promotions');
    }
};

const adminAPI = {
    async createBook(bookData) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            assertMockAdmin();

            const list = getMockBooks();
            const newBook = {
                id: list.length ? Math.max(...list.map(b => b.id)) + 1 : 1,
                title: bookData.title,
                author: bookData.author,
                price: Number(bookData.price) || 0,
                rating: 0, // по ТЗ рейтинг считает сервер
                categories: bookData.categories,
                coverUrl: './images/book.png',
                isFavourite: false,
                publisher: bookData.publisher,
                series: bookData.series,
                year: Number(bookData.year) || 0,
                isbn: bookData.isbn,
                pages: Number(bookData.pages) || 0,
                size: bookData.size,
                coverType: bookData.coverType,
                circulation: Number(bookData.circulation) || 0,
                weight: Number(bookData.weight) || 0,
                ageRestriction: bookData.ageRestriction,
                text: bookData.description, 
                promotionId: bookData.promotionId ?? null,
                comingSoon: !!bookData.comingSoon,
                cartCount: 0,
                favouriteCount: 0,
                isInCart: false
            };

            saveMockBooks([...list, newBook]);
            return newBook;
        }

        return await request('/api/admin/books', {
            method: 'POST',
            body: bookData
        });
    },

    async updateBook(id, bookData) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            assertMockAdmin();

            const list = getMockBooks();
            const index = list.findIndex(b => b.id === Number(id));
            if (index === -1) {
                const error = new Error('Книга не найдена');
                error.status = 404;
                throw error;
            }

            const { description, ...rest } = bookData;
            list[index] = {
                ...list[index],
                ...rest,
                ...(description !== undefined ? { text: description } : {})
            };
            saveMockBooks(list);
            return list[index];
        }

        return await request(`/api/admin/books/${id}`, {
            method: 'PUT',
            body: bookData
        });
    },

    async deleteBook(id) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            assertMockAdmin();

            saveMockBooks(getMockBooks().filter(b => b.id !== Number(id)));
            return { success: true };
        }

        return await request(`/api/admin/books/${id}`, {
            method: 'DELETE'
        });
    },

    async uploadBookCover(id, file) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            assertMockAdmin();

            const coverUrl = await fileToDataUrl(file);
            const list = getMockBooks();
            const index = list.findIndex(b => b.id === Number(id));
            if (index === -1) throw new Error('Книга не найдена');

            list[index] = { ...list[index], coverUrl };
            saveMockBooks(list);
            return { coverUrl };
        }

        const formData = new FormData();
        formData.append('file', file);
        return await request(`/api/admin/books/${id}/cover`, {
            method: 'POST',
            body: formData
        });
    },

    async createPromotion(promoData) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            assertMockAdmin();

            const list = readJSON('stocks', MOCK_STOCKS);
            const newPromo = {
                id: list.length ? Math.max(...list.map(p => p.id)) + 1 : 1,
                theme: promoData.theme,
                booksText: promoData.booksText,
                discountPercent: Number(promoData.discountPercent)
            };
            writeJSON('stocks', [...list, newPromo]);
            return newPromo;
        }

        return await request('/api/admin/promotions', {
            method: 'POST',
            body: promoData
        });
    },

    async updatePromotion(id, promoData) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            assertMockAdmin();

            const list = readJSON('stocks', MOCK_STOCKS);
            const index = list.findIndex(p => p.id === Number(id));
            if (index === -1) throw new Error('Акция не найдена');

            list[index] = { ...list[index], ...promoData };
            writeJSON('stocks', list);
            return list[index];
        }

        return await request(`/api/admin/promotions/${id}`, {
            method: 'PUT',
            body: promoData
        });
    },

    async deletePromotion(id) {
        await mockDelay();

        if (API_CONFIG.useMock) {
            assertMockAdmin();

            const list = readJSON('stocks', MOCK_STOCKS).filter(p => p.id !== Number(id));
            writeJSON('stocks', list);
            return { success: true };
        }

        return await request(`/api/admin/promotions/${id}`, {
            method: 'DELETE'
        });
    }
};

const api = {
    auth: authAPI,
    books: booksAPI,
    cart: cartAPI,
    favorites: favoritesAPI,
    reviews: reviewsAPI,
    promotions: promotionsAPI,
    admin: adminAPI
};
window.api = api;