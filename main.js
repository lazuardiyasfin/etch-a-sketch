function generateGrid() {
    const container = document.querySelector('.grid-container');

    const grid = document.createElement('div');
    container.appendChild(grid);

    grid.classList.add('grid');
    
    for (let columnNumber = 1; columnNumber <= 16; columnNumber++) {
        const column = document.createElement('div');
        grid.appendChild(column);

        for (let rowNumber = 1; rowNumber <= 16; rowNumber++) {
            const cell = document.createElement('div');
            column.appendChild(cell);

            cell.classList.add('cell');
        }
    }
}

generateGrid();