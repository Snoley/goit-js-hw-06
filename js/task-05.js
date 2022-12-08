
const inputName = document.querySelector(`#name-output`);
const input = document.querySelector(`#name-input`);

input.addEventListener(`input`, () => (inputName.textContent = input.value));
input.addEventListener(`input`, changeName);

function changeName() {
  if (input.value) {
    inputName.textContent = input.value;
  } else inputName.textContent = "Anonymous";
}