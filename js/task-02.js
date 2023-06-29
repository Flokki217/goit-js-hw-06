const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const firstElItem = document.createElement("li");
firstElItem.textContent = ingredients[0];

const secondElItem = document.createElement("li");
secondElItem.textContent = ingredients[1];
const thirdElItem = document.createElement("li");
thirdElItem.textContent = ingredients[2];
const forthElItem = document.createElement("li");
forthElItem.textContent = ingredients[3];
const fifthElItem = document.createElement("li");
fifthElItem.textContent = ingredients[4];
const sixthElItem = document.createElement("li");
sixthElItem.textContent = ingredients[5];
const listEl = document.querySelector("#ingredients");
listEl.append(
  firstElItem,
  secondElItem,
  thirdElItem,
  forthElItem,
  fifthElItem,
  sixthElItem
);
