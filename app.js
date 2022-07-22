
const clientHeight = document.getElementById('info').clientHeight;
const clientWidth = document.getElementById('info').clientWidth;
const clientHeight2 = document.getElementById('quote').clientHeight;
const clientWidth2 = document.getElementById('quote').clientWidth;
console.log(clientHeight);
console.log(clientWidth);
const info = document.querySelector(".info");
const background = document.createElement("div");
background.classList.add("background");
info.appendChild(background);
function createGrid (x) {
  
        for (let i = 0; i < x*x; i++) {
            let square = document.createElement('div');
            square.setAttribute("id", "grid");
            square.style.height = `${clientHeight / 50}px`;
            square.style.width = `${clientWidth / 50}px`;
            background.appendChild(square);
        }
    
};
function createGrid2 (x) {
  
    for (let i = 0; i < x*x; i++) {
        let square2 = document.createElement('div');
        square2.setAttribute("id", "grid2");
        square2.style.height = `${clientHeight2 / 20}px`;
        square2.style.width = `${clientWidth2 / 20}px`;
        background.appendChild(square2);
    }

};
createGrid(50);
createGrid2(20);


const grids = document.querySelectorAll("#grid");
grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    });
});


function random() {
    return Math.floor(Math.random() * 256) + 150;
}

const grids2 = document.querySelectorAll("#grid2");
grids2.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = `rgb(${random2()}, ${random2()}, ${random2()})`;
    });
});


function random2() {
    return Math.floor(Math.random() * 150);
}