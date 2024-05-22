const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const containerForItems = ingredients.map(item => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = item;
  ingredientItem.classList.add("item");
  return ingredientItem;
})

ingredientsEl.append(...containerForItems);