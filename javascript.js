//This is the most spaghetti code i'll probably write in my life, i don't know what i'm doing
// may god have mercy on my wretched soul

const squareWrapper = document.querySelector("[data-squareWrapper]");
const girdSize = document.querySelector("[data-gridSize]");
const squareRange = document.querySelector("[data-squareRange]");
const colorPicker = document.querySelector("[data-colorPicker]");
const rainbow = document.querySelector("[data-rainbow]");
const erase = document.querySelector("[data-erase]");
const clear = document.querySelector("[data-clear]");
const toggle = document.querySelector("[data-toggleBorders]");

let inputColor = colorPicker.value;
let currentMode = inputColor;
eraseColor = "#000000";
let rainbowMode = ``;
let square;

let squareAmount = 16;
let squareSquared = 256;
girdSize.innerText = `${squareAmount} x ${squareAmount}`;
const squareChange = () => {
  squareAmount = squareRange.value;
  squareSquared = squareAmount * squareAmount;
  removeDivs();
  addDivs();
  girdSize.innerText = `${squareAmount} x ${squareAmount}`;
};
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function addDivs() {
  for (let i = 0; i < squareSquared; i++) {
    square = document.createElement("div");
    squareWrapper.appendChild(square);
    square.classList.add("square");
    square.classList.add("squareBorder");

    square.addEventListener("mouseover", changeColor);
    square.addEventListener("mousedown", changeColor);

    let heightWidth = 100 / squareAmount;
    square.setAttribute(
      "style",
      `height: ${heightWidth}%; width: ${heightWidth}%`
    );
  }
}
const changeColor = (e) => {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === inputColor) {
    e.target.style.backgroundColor = `${inputColor}`;
  } else if (currentMode === eraseColor) {
    eraseColor = "#000000";
    e.target.style.backgroundColor = `${eraseColor}`;
  } else if (currentMode === rainbowMode) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    let rainbowMode = `rgb(${randomR}, ${randomG}, ${randomB})`;
    e.target.style.backgroundColor = `${rainbowMode}`;
  }
};
function removeDivs() {
  while (squareWrapper.firstChild) {
    squareWrapper.removeChild(squareWrapper.lastChild);
  }
}

squareRange.addEventListener("input", () => {
  squareChange();
});
colorPicker.addEventListener("input", () => {
  inputColor = colorPicker.value;
  currentMode = inputColor;
});
erase.addEventListener("click", () => {
  eraseColor = "#000000";
  currentMode = eraseColor;
});
rainbow.addEventListener("click", () => {
  currentMode = rainbowMode;
});
clear.addEventListener("click", () => {
  removeDivs();
  addDivs();
});

addDivs();

toggle.addEventListener("click", () => {
  document
    .querySelectorAll(".square")
    .forEach((x) => x.classList.toggle("squareBorder"));
});
