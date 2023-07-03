const catElemItems = document.querySelectorAll(".item");
const mainList = document.querySelector("#categories");
const itemsCount = mainList.children.length;
console.log(`Number of categories: ${itemsCount} `);
catElemItems.forEach(function (category) {
  const catElName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.childElementCount;
  console.log(`Category: ${catElName}`);
  console.log(`Elements: ${categoryElements}`);
});
