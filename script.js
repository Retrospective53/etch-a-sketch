const body = document.querySelector('body');
const container = document.createElement('div');
const container2 = document.createElement('div');
const grid = document.createElement('div');
grid.classList.add('grid');

const gridButton = document.createElement('button');
gridButton.textContent = 'Etch a Sketch';
gridButton.addEventListener('click', makeCell);
body.appendChild(gridButton);

body.appendChild(grid);

function makeCell(e) {
    // Create grid
    e = prompt("enter grid", "16")
    if (e > 100) {
        alert('Input must be under 100')
        return;
    }

    // Clear grid to remove previous created div
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }

    // Change grid template columns as entered 
    grid.style.gridTemplateColumns = "repeat(" + e + ", 1fr)";

    for (let i = 0; i < e*e ; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "white";
        })
        grid.appendChild(cell);
    }
}
