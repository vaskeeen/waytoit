export function toggleCartStatus() {
    // знаходимо корзину
    const cartWrapper = document.querySelector('.cart-wrapper');
    // знаходимо блок "пусто в корзині"
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    // знаходимо блок залишення даних, кнопка "замовити"
    const orderForm = document.querySelector('#order-form');

    const cartBlock = document.querySelector('.cart');


    //
    // знаходимо картки чи є в корзині
    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
        cartBlock.classList.remove('hidden');

    } else {
        cartBlock.classList.add('hidden');
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}