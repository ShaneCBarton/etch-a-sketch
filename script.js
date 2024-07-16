const grid = document.getElementById("grid");
let mouseHold = false;

document.body.onmousedown = () => {
    mouseHold = true;
}

document.body.onmouseup = () => {
    mouseHold = false;
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.border = "1px solid black";
        cell.style.width = "15px";
        cell.style.height = "15px";
        grid.appendChild(cell);
    }
}

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener('mousemove', () => {
        if (mouseHold) {
            changeColor(cell);
        }
    });
    cell.addEventListener('mousedown', () => {
        changeColor(cell);
    });
});

function changeColor(div) {
    div.style.backgroundColor = "black";
}
