let stocks = [{
    id: 1,
    theme: "Увлекательные приключения",
    booksText: "на книги <br> про космос",
    discountPercent: 20
},
{
    id: 2,
    theme: "Увлекательные приключения",
    booksText: "на книги <br> про космос",
    discountPercent: 10
},
{
    id: 3,
    theme: "Увлекательные приключения",
    booksText: "на книги <br>про космос",
    discountPercent: 25
}]



function createStockCard(stock) {
    return `
                     <div class="stock" id="${stock.id}">
                    <img src="images/stock.jpg" alt="Акция">
                    <p class=" stock__title">${stock.theme}</p>
                    <h3 class="stock__pr">-${stock.discountPercent}%</h3>
                    <p class="stock__text">${stock.booksText}</p>
                    <a href="./catalog.html" class="stock__btn">К покупкам</a>
                </div>
    `;};
 const allStockHTML = stocks.map(createStockCard).join('');
 document.getElementById('all__stocks').innerHTML = allStockHTML;