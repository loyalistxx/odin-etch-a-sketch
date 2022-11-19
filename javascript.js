// 1- on page load, a 16 by 16 grid of divs shows up in a wrapper
// 2- on button click a prompt comes up asking for a number
// that is squared
// 3- 16 by 16 grid gets removed and a similar function is
// used to insert the new grid, the number dictated by the prompt
// 4- the square divs always take 100% / number of divs of the width
// and height of the wrapper so that the lower the number the bigger the square
// 5- put a limit on the amount that can be prompted
// 6- Rainbow animation on mouseenter, and rainbow animation fade on mouse out
// 7- put a simple footer for good measure
// Commit changes one by one

const squareWrapper = document.getElementById("squareWrapper");
const btn = document.querySelector("#btn");

let squareAmount = 16;
let squareSquared = 256;
function squarePrompt() {
  squareAmount = prompt("How many squares do you want?");
  if (isNaN(squareAmount)) {
    alert("You must enter a Number!");
  } else {
    alert("You choose " + squareAmount + " by " + squareAmount + " squares!");
    squareSquared = squareAmount * squareAmount;
    removeDivs();
    addDivs();
  }
}
btn.addEventListener("click", () => {
  squarePrompt();
});
function addDivs() {
  for (let i = 0; i < squareSquared; i++) {
    let square = document.createElement("div");
    squareWrapper.appendChild(square);
    square.classList.add("square");
    square.addEventListener("mouseenter", () => {
      square.classList.add("onSquare");
      square.classList.remove("outSquare");
    });
    square.addEventListener("mouseout", () => {
      square.classList.add("outSquare");
      square.classList.remove("onSquare");
    });
  }
}
function removeDivs() {
  while (squareWrapper.firstChild) {
    squareWrapper.removeChild(squareWrapper.lastChild);
  }
}
addDivs();
