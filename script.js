// додаємо прослушку на все вікно

import {toggleCartStatus} from './toggleCartStatus.js';
import {calcCartPriceAndDelivery} from './calcCartPrice.js';

window.addEventListener('click', function(event){

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector("[data-counter]");
    }

    // перевіряємо чи є елемент по якому клікнули кнопкою плюс
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }
    // перевіряємо чи є елемент по якому клікнули кнопкою мінус, і що не менше 0
    if (event.target.dataset.action === 'minus') {
        // перевіряємо чи є картка в корзині і чи дорівнює вона нулю
        if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove();
        }
        // якщо більше 1 то зменшуємо на 1
        if (counter.innerText > 0) {
            counter.innerText = --counter.innerText;
        }
        toggleCartStatus();
    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.counter-wrapper')) {
        calcCartPriceAndDelivery();
    }
})