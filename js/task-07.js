const controlElemnt = document.querySelector("#font-size-control");

const textElement = document.querySelector("#text");

controlElemnt.addEventListener("change", handlerControlElementChange);

function handlerControlElementChange(event) {
  textElement.style.fontSize = `${event.currentTarget.value}px`;
}
