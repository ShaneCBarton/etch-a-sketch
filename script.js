const grid = document.getElementById("grid");

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
