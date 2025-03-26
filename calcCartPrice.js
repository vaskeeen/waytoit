export function calcCartPriceAndDelivery(){
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector(".delivery-cost");
    const cartDelivery = document.querySelector("[data-cart-delivery]");



    let totalPrice = 0;

    // пробігаємось по кожній картці в корзині
    cartItems.forEach(function(item) {
        // беремо кількість картки в корзині
        const amountEl = item.querySelector('[data-counter]');
        // беремо вартість картки в корзині
        const priceEl = item.querySelector('.price__currency');
        // додаємо всі картки: вартість та кількість
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        // показуємо загальну суму кожного товару в корзині
        totalPrice += currentPrice;
    })
    //  відображаємо ціну в корзині "всього"
    totalPriceEl.innerText = totalPrice;

    // додаємо або приховуємо блок з прайсом доставки
    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }
    if (totalPrice >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'безкоштовно';
    } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '120 грн.';
    }
}
