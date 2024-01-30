document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const width = 10;

    console.log(grid);
    
    //create Board
    function createBoard() {
        
        for(let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            grid.appendChild(square);
        }
    }
    createBoard();

})