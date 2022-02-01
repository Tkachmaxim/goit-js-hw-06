const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientElement = (element) => {
  const ingridient = document.createElement("li");
  ingridient.textContent = element;
  ingridient.classList.add("item");

  return ingridient;
};

const murkUp = ingredients.map(ingredientElement);
const parentElement = document.querySelector("#ingredients");
parentElement.append(...murkUp);
