const refs = {
    div: document.querySelector('#controls'),
    input: document.querySelector('input'),
    buttonRend: document.querySelector('button[data-action="render"]'),
    buttonDest: document.querySelector('button[data-action="destroy"]'),
    divBox: document.querySelector('#boxes'),
}

let amount = 0;

const newAmount = function (changes) {
    amount = changes.currentTarget.value;
}

refs.input.addEventListener('input', newAmount);
refs.buttonRend.addEventListener('click', () => {
    for (let i = 1, boxSize = 30; i <= amount; i++, boxSize = 10) {
        refs.divBox.innerHTML += `
    <div style =
        "width: ${boxSize}px; 
        height: ${boxSize}px;
        background-color: rgb(${Math.ceil(Math.random() * 255,)}, ${Math.ceil(
            Math.random() * 255)}, ${Math.ceil(Math.random() * 255)});
        margin: 10px">
    </div>`
    }
    refs.input.value = '';
});

refs.buttonDest.addEventListener('click', () => {
    refs.divBox.innerHTML = '';
    refs.input.value = '';
});