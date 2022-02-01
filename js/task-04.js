let counterValue = 0;
const elValue = document.querySelector("#value");

const incrButton = document.querySelector('button[data-action="increment"]');
const decrButton = document.querySelector('button[data-action="decrement"]');

incrButton.addEventListener("click", () => {
  counterValue += 1;
  elValue.textContent = counterValue;
});

decrButton.addEventListener("click", () => {
  counterValue -= 1;
  elValue.textContent = counterValue;
});
