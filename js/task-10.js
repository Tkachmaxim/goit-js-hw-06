function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberOfBoxes = document.querySelector("#controls input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

function makeBox(amount) {
  const boxes = [];
  let startWidth = 30;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${startWidth}px`;
    box.style.height = `${startWidth}px`;
    startWidth += 10;
    box.className = "box";
    boxes.push(box);
  }
  return boxes;
}

buttonCreate.addEventListener("click", handlerButtonCreateClick);

buttonDestroy.addEventListener("click", handlerButtonDestroyClick);

function handlerButtonCreateClick() {
  const quantity = Number(numberOfBoxes.value);
  const ParenElement = document.querySelector("#boxes");
  ParenElement.append(...makeBox(quantity));
}

function handlerButtonDestroyClick() {
  const boxesForDestroy = document.querySelectorAll(".box");
  boxesForDestroy.forEach((elemet) => {
    elemet.remove();
  });
}
