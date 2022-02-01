const formElement = document.querySelector("form");

formElement.addEventListener("submit", handlerFormElementSubmit);

function handlerFormElementSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email === "" || password === "") {
    alert("Введите все поля!");
  } else {
    const result = { email, password };
    console.log(result);
    event.currentTarget.reset();
  }
}
