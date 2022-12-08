const input = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

input.addEventListener("input", changeSize);

function changeSize() {
    text.style.fontSize = `${input.value}px`;
}