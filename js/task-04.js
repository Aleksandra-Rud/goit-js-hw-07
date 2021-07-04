let spanNum = document.querySelector('#value');
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');


let counterValue = +(spanNum.textContent);

buttonDecr.addEventListener('click', () => {
    --counterValue;
    return spanNum.textContent = counterValue;
});

buttonIncr.addEventListener('click', () => {
    ++counterValue;
    return spanNum.textContent = counterValue;
});
