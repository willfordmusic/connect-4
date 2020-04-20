export function fourConnected(cells: number[][], height: number, width: number, player: number): boolean {
    // Horizontal Check 
    for (let j = 0; j < height - 3; j++) {
        for (let i = 0; i < width; i++) {
            if (cells[i][j] === player && cells[i][j + 1] === player && cells[i][j + 2] === player && cells[i][j + 3] === player) return true;      
        }
    }

    // Vertical Check
    for (let i = 0; i < width - 3; i++) {
        for (let j = 0; j < height; j++) {
            if (cells[i][j] === player && cells[i + 1][j] === player && cells[i + 2][j] === player && cells[i + 3][j] === player) return true;        
        }
    }

    // Ascending Diagonal Check 
    for (let i = 3; i < width; i++) {
        for (let j = 0; j < height - 3; j++) {
            if (cells[i][j] === player && cells[i - 1][j + 1] === player && cells[i - 2][j + 2] === player && cells[i - 3][j + 3] === player) return true;
        }
    }

    // Descending Diagonal Check
    for (let i = 3; i < width; i++) {
        for (let j = 3; j < height; j++) {
            if (cells[i][j] === player && cells[i - 1][j - 1] === player && cells[i - 2][j - 2] === player && cells[i - 3][j - 3] === player) return true;
        }
    }
    return false;
}

export function getEmptyCell(cells: number[][], column: number): number {
    for (let i = 0; i < cells[column].length; i++) {
        if (cells[column][i] === -1) return i;
    }
    return -1;
}

export function getInitCellState(width: number, height: number) {
    const initCellState: number[][] = [];
    for (let i = 0; i < width; i++) {
        initCellState.push([]);
        for (let j = 0; j < height; j++) initCellState[i].push(-1);
    }
    return initCellState;
}
