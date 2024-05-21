const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

ingredients.forEach(function (item) {
    const ingredientItem = document.createElement("li")
  ingredientItem.textContent = item;
  ingredientItem.classList.add("item");
  const container = [];
  container.push(ingredientItem);
  ingredientsEl.append(...container);
  });
  