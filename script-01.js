// знаходимо елементи на сторінці
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-action="counter"]');

// відслідковуємо клік на кнопку мінус
btnMinus.addEventListener('click', function() {
    console.log('Minus clicked!');
    // перевіряємо щоб лічильник був більше 0
    if (parseInt(counter.textContent) > 0) {
        // зменшуємо лічильник на 1
        counter.innerText = --counter.innerText;
    }
})

// відслідковуємо клік на кнопку плюс
btnPlus.addEventListener('click', function() {
    // збільшуємо лічильник на 1
    counter.innerText = ++counter.innerText;
})