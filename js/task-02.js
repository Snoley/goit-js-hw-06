const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


  document.querySelector('#ingredients').append(
    ...ingredients.map(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      li.classList.add('item');
      return li;
    }),
  );