
const defaultStocks = [
    {
        id: 1,
        theme: "Увлекательные приключения",
        booksText: "на книги <br> про космос",
        discountPercent: 20
    },
    {
        id: 2,
        theme: "Фантастические миры",
        booksText: "на книги <br> про фантастику",
        discountPercent: 10
    },
    {
        id: 3,
        theme: "Детективные истории",
        booksText: "на книги <br> про детективы",
        discountPercent: 25
    }
];

let stocks = JSON.parse(localStorage.getItem('stocks')) || defaultStocks;

function saveStocksToStorage() {
    localStorage.setItem('stocks', JSON.stringify(stocks));
}

function createStockCard(stock) {
    return `<div class="stock" id="${stock.id}"> 
        <img src="images/stock.jpg" alt="Акция"> 
        <p class="stock__title">${stock.theme}</p> 
        <h3 class="stock__pr">-${stock.discountPercent}%</h3> 
        <p class="stock__text">${stock.booksText}</p> 
        <a href="./catalog.html" class="stock__btn">К покупкам</a> 
    </div>`;
}

const allStocksContainer = document.getElementById('all__stocks');
if (allStocksContainer) {
    const allStockHTML = stocks.map(createStockCard).join('');
    allStocksContainer.innerHTML = allStockHTML;
}