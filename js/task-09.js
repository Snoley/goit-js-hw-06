function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body;
const btnColor = document.querySelector(".change-color");
btnColor.addEventListener("click", changeColor);

function changeColor() {
  const bodyColor = getRandomHexColor();

  body.style.backgroundColor = bodyColor;
  spanColor.textContent = bodyColor;
}