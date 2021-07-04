const refs = {
    input: document.querySelector('input'),
    span: document.querySelector('span'),
};

const spanText = refs.span.textContent;

refs.input.addEventListener('input', () =>
    refs.input.value.length === 0 ? refs.span.textContent = spanText : refs.span.textContent = refs.input.value
);