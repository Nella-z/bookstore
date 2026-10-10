const stocksContainer = document.getElementById('all__stocks');

function createStockCard(stock) {
    return `
        <div class="stock" id="${stock.id}"> 
            <img src="images/stock.jpg" alt="Акция"> 
            <p class="stock__title">${stock.theme}</p> 
            <h3 class="stock__pr">-${stock.discountPercent}%</h3> 
            <p class="stock__text">${stock.booksText}</p> 
            <a href="./catalog.html" class="stock__btn">К покупкам</a> 
        </div>`;
}

async function renderStocks() {
    if (!stocksContainer) return;
    
    try {
        stocksContainer.innerHTML = '<p>Загрузка...</p>';
        const stocks = await api.promotions.getPromotions();
        
        if (!stocks || stocks.length === 0) {
            stocksContainer.innerHTML = '<p>Акций пока нет</p>';
        } else {
            stocksContainer.innerHTML = stocks.map(createStockCard).join('');
        }
    } catch (error) {
        console.error(error);
        stocksContainer.innerHTML = '<p>Ошибка загрузки акций</p>';
    }
}

renderStocks();