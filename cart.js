 // карта обраних товарів

 import {toggleCartStatus} from './toggleCartStatus.js';
 import {calcCartPriceAndDelivery} from "./calcCartPrice.js";

 // знаходимо загальний блок корзини
 const cartBlock = document.querySelector('.cart');


 // знаходимо корзину
 const cartWrapper = document.querySelector('.cart-wrapper');
// шукаємо клік по екрану
window.addEventListener('click', function(event) {
    // шукаємо клік по кнопці "в корзину"
    if (event.target.hasAttribute('data-cart')) {
        // знаходимо родителя кнопки карточки
        const card = event.target.closest('.card');
        // витягуємо з карточки всю інфу
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }
        // знаходимо в корзині конкретну карточку по id
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        // якщо є така карточка
        if (itemInCart) {
            // беремо кількість в карточці
            const counterElement = itemInCart.querySelector('[data-counter]');
            // додаємо до кількості в карточці в корзині ще кількість наступної клацнутої карточки
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            // якщо не було в корзині карточки, то окремо створюємо карточку
            const productHTML = `<div class="cart-item" data-id="${productInfo.id}">
                                         <div class="cart-item__top">
                                             <div class="cart-item__img">
                                                 <img src="${productInfo.imgSrc}" alt="">
                                             </div>
                                             <div class="cart-item__desc">
                                                 <div class="cart-item__title">${productInfo.title}</div>
                                                 <div class="cart-item__weight">${productInfo.weight}</div>

                                                 <!-- cart-item__details -->
                                                 <div class="cart-item__details">

                                                     <div class="items items--small counter-wrapper">
                                                         <div class="items__control" data-action="minus">-</div>
                                                         <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                         <div class="items__control" data-action="plus">+</div>
                                                     </div>

                                                     <div class="price">
                                                         <div class="price__currency">${productInfo.price}</div>
                                                     </div>

                                                 </div>
                                                 <!-- // cart-item__details -->

                                             </div>
                                         </div>
                                     </div>`
            // закидуємо в кінець HTML корзини
            cartWrapper.insertAdjacentHTML('beforeend', productHTML);
        //     при кліці на "додати в корзину" створюючи нову картку, додаємо у "всього" суму
        }
        // після додавання в корзину карточки, саму карточку вертаємо на кількість 1
        card.querySelector('[data-counter]').innerText = '1';
        // відображення статуса корзини порожня/повна
        toggleCartStatus();
        calcCartPriceAndDelivery();

        // показуємо блок корзини
        cartBlock.classList.remove('none');
    }
})

// робимо функцію закриття блоку корзини
const close = () => {
    cartBlock.addEventListener('click', function(event) {
        if (event.target.classList.contains('cart-btn-close')) {
            cartBlock.classList.add('none');
        }
    })
}
close();



