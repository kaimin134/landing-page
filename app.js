const clientHeight = document.getElementById("info").clientHeight;
const clientWidth = document.getElementById("info").clientWidth;
// const clientHeight2 = document.getElementById("quote").clientHeight;
// const clientWidth2 = document.getElementById("quote").clientWidth;
console.log(clientHeight);
console.log(clientWidth);
const info = document.querySelector(".info");
const info2 = document.querySelector(".info2");
const background = document.createElement("div");
const background2 = document.createElement("div");
background.classList.add("background");
background2.classList.add("background2");
info.appendChild(background);
info2.appendChild(background2);
function createGrid(x) {
  for (let i = 0; i < x * x; i++) {
    let square = document.createElement("div");
    square.setAttribute("id", "grid");
    square.style.height = `${clientWidth / 20}px`;
    square.style.width = `${clientWidth / 20}px`;
    background.appendChild(square);
  }
}
createGrid(10);

function createGrid2(x) {
  for (let i = 0; i < x * x; i++) {
    let square2 = document.createElement("div");
    square2.setAttribute("id", "grid2");
    square2.style.height = `${clientWidth / 20}px`;
    square2.style.width = `${clientWidth / 20}px`;
    background2.appendChild(square2);
  }
}

createGrid2(10);

const grids = document.querySelectorAll("#grid");
grids.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
  });
});

function random() {
  return Math.floor(Math.random() * 256) + 150;
}

const grids2 = document.querySelectorAll("#grid2");
grids2.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = `rgb(${random2()}, ${random2()}, ${random2()})`;
  });
});

function random2() {
  return Math.floor(Math.random() * 150);
}
