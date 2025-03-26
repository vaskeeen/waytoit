const productsContainer = document.querySelector('#products-container');

// асинхронна функція отримання даних з products.json
async function getProducts() {
    // отримуємо дані з файла products.json
    const response = await fetch('./products.json');
    // парсимо з json формата в js
    const productsArray = await response.json();
    // запускаємо функцію рендера, відображення товару
    renderProducts(productsArray);
}

getProducts();

function renderProducts(productsArray) {
    productsArray.forEach(function(item) {
        const productHTML = `<div class="col">
                        <div class="block" id="products-container">
                            <!-- ролл-->
                            <div class="col">
                                <div class="card" data-id="${item.id}">
                                    <img class="product-img" src="./assets/${item.imgSrc}" alt="">
                                    <div class="card-body">
                                        <h4 class="item-title">${item.title}</h4>
                                        <p><small data-items-in-box class="text-muted">${item.itemsInBox}</small></p>

<!--                                        лічильник-->
                                        <div class="details-wrapper">
                                            <div class="items counter-wrapper">
                                                <div class="items__control" data-action="minus">-</div>
                                                <div class="items__control-center" data-counter="counter">1</div>
                                                <div class="items__control" data-action="plus">+</div>
                                            </div>

<!--                                            ціна-->
                                            <div class="price">
                                               <div class="price__weight">${item.weight} грам</div>
                                                <div class="price__currency">${item.price} <span>грн.</span></div>
                                            </div>
                                        </div>
                                        <button data-cart type="button" class="btn-to-cart">+ в кошик</button>
                                    </div>
                                </div>
                            </div>
                            <!--ролл-->
                        </div>
                    </div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    })
}