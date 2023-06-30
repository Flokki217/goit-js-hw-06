const catElemItems = document.querySelectorAll("#categories > li.item");
const itemsCount = catElemItems.length;
console.log(`Number of categories: ${itemsCount} `);
catElemItems.forEach(function (category) {
  const catElName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;
  console.log(`Category: ${catElName}`);
  console.log(`Elements: ${categoryElements}`);
});
