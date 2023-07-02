const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrList = document.querySelector("#ingredients");
ingredients.map((element) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = element;
  ingrList.append(ingredientEl);
});
