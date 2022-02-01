function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeColorButton.addEventListener("click", handlerChangeColorButtonClick);

function handlerChangeColorButtonClick() {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorName.textContent = currentColor;
}
