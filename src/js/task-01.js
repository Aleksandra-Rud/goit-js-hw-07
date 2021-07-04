const refs = {
    ulCategories: document.getElementById('categories'),
    h2Array: document.querySelectorAll('h2'),
    liItemArray: document.querySelectorAll('.item')
}

console.log(`В списке ${refs.ulCategories.children.length} категории`)

console.log(`Категория ${refs.h2Array[0].textContent}`),
console.log(`В категории ${refs.liItemArray[0].children[1].children.length}`),

console.log(`Категория ${refs.h2Array[1].textContent}`),
console.log(`В категории ${refs.liItemArray[1].children[1].children.length}`),

console.log(`Категория ${refs.h2Array[2].textContent}`),
console.log(`В категории ${refs.liItemArray[2].children[1].children.length}`)
