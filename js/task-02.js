const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrList = document.querySelector("#ingredients");
const fullList = ingredients.map((element) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = element;
  return ingredientEl;
});
ingrList.append(...fullList);
