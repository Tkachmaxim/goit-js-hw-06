const elInput = document.querySelector("#name-input");
const elOutput = document.querySelector("#name-output");

elInput.addEventListener("input", handlerElInputInput);

function handlerElInputInput(event) {
  if (event.currentTarget.value != "") {
    return (elOutput.textContent = event.currentTarget.value.trim());
  }
  return (elOutput.textContent = "Anonymous");
}
