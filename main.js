generateGrid(16);

document.querySelector('#new-grid-btn').addEventListener('click', handleNewGridButton);

function handleNewGridButton() {
    let squaresPerSide = prompt("Enter squares per side:");

    while (squaresPerSide == null || Number(squaresPerSide) <= 0 || Number(squaresPerSide) > 100 || isNaN(Number(squaresPerSide))) {
        if (squaresPerSide == null) {
            return;
        }

        alert("Please input a positive integer (up to 100).");
        squaresPerSide = prompt("Enter squares per side:");
    }

    document.querySelector('.grid-container').replaceChildren();
    generateGrid(squaresPerSide);
}

function generateGrid(squaresPerSide) {
    const container = document.querySelector('.grid-container');

    const grid = document.createElement('div');
    container.appendChild(grid);

    grid.classList.add('grid');
    
    let cellSide = getSquareSide(squaresPerSide);
    
    for (let columnNumber = 1; columnNumber <= squaresPerSide; columnNumber++) {
        const column = document.createElement('div');
        grid.appendChild(column);

        for (let rowNumber = 1; rowNumber <= squaresPerSide; rowNumber++) {
            const cell = document.createElement('div');
            column.appendChild(cell);

            cell.classList.add('cell');

            cell.style.width = `${cellSide}px`;
            cell.style.height = `${cellSide}px`;

            cell.addEventListener('mouseover', () => cell.style.background = 'black');
        }
    }
}

function getSquareSide(squaresPerSide) {
    let containerStyles = getComputedStyle(document.querySelector('.grid-container'));
    let containerWidth = parseFloat(containerStyles.width);

    return containerWidth / squaresPerSide;
}