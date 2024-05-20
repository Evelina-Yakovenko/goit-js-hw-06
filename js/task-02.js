const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");

ingredients.forEach(function (item, idx, array) {
  
  const ingredientItemRef = document.createElement("li")
  ingredientItemRef.textContent = item
  ingredientItemRef.classList.add("item")
  ingredientsRef.append(ingredientItemRef)
});