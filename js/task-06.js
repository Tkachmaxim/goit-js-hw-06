const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", handlerInputElementBlur);

function handlerInputElementBlur(event) {
  if (
    event.currentTarget.value.length !==
    Number(event.currentTarget.dataset.length)
  ) {
    return (event.currentTarget.className = "invalid");
  }
  return (event.currentTarget.className = "valid");
}
