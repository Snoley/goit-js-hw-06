const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, checkLength);

function checkLength() {
  if (input.value.length !== Number(input.dataset.length)) {
    input.classList.add(`invalid`);
  } else input.classList.replace(`invalid`, `valid`);
}