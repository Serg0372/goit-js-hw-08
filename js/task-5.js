const body = document.querySelector('body');
const spanColor = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonChangeColor.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const newBackgroundColor = getRandomHexColor();

  body.style.backgroundColor = newBackgroundColor;

  spanColor.textContent = newBackgroundColor;
}
