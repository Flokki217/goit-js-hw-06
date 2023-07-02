const catElemItems = document.querySelectorAll(".item");
const mainList = document.querySelector("#categories");
const itemsCount = mainList.children.length;
console.log(`Number of categories: ${itemsCount} `);
catElemItems.forEach(function (category) {
  const catElName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;
  console.log(`Category: ${catElName}`);
  console.log(`Elements: ${categoryElements}`);
});

//  Вибачте але  як зробити інакше я не знаю