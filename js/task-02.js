const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('#ingredients');
const listArray = ingredients.map((items) => {
    const listElement = document.createElement('li');
    listElement.textContent = items;
    
    return listElement
});

ul.append(...listArray)