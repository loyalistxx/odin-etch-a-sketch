const squareWrapper = document.getElementById("squareWrapper");

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  squareWrapper.appendChild(square);
  square.classList.add("square");
  square.addEventListener("mouseenter", () => {
    square.classList.add("onSquare");
  });
  square.addEventListener("mouseout", () => {
    square.classList.remove("onSquare");
    square.classList.add("outSquare");
  });
}
