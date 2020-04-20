// Code inspired by: https://towardsdatascience.com/creating-the-perfect-connect-four-ai-bot-c165115557b0

export default function makeAIMove(cells: number[][], width: number, height: number, player: number): Promise<number> {
    return new Promise<number>((resolve) => {
        const ints = cellsToInts(cells, width, player);
        console.log(ints);
        //const move = miniMax(ints[0], ints[1], width, height);
        setTimeout(() => resolve(0), 1000);
    });
}

function cellsToInts(cells: number[][], width: number, player: number): [number, number] {
    let position = '';
    let mask = '';

    for (let j = width - 1; j > -1; j--) {
        mask += '0';
        position += '0';

        for (let i = 0; i < width - 1; i++) {
            mask += cells[i][j] === -1 ? '0' : '1';
            position += cells[i][j] === player ? '0': '1';
        }
    }
    return [parseInt(position, 2), parseInt(mask, 2)];
}

function connectedFour(position: number, width: number): boolean {
    let m;
    
    // Horizontal check
    m = position & (position >> width);
    if (m & (m >> (width * 2))) return true;
    
    // Diagonal \
    m = position & (position >> (width - 1));
    if (m & (m >> ((width - 1) * 2))) return true;
    
    // Diagonal /
    m = position & (position >> (width + 1));
    if (m & (m >> ((width + 1) * 2))) return true;
    
    //Vertical
    m = position & (position >> 1);
    if (m & (m >> 2)) return true;
    
    // Nothing found
    return false;
}

function makeMove(position: number, mask: number, height: number, col: number): [number, number] {
    const new_position = position ^ mask;
    const new_mask = mask | (mask + (1 << (col * (height + 1))));
    return [new_position, new_mask];
}

function canMakeMove(mask: number, col: number): boolean {
    // TODO
    return true;
}

function miniMax(position: number, mask: number, width: number, height: number): [number, number] { // [column, score]
    const scores: [number, number][] = []
    for (let i = 0; i < width; i++) {
        if (canMakeMove(mask, i)) {
            const moved = makeMove(position, mask, height, i);
            scores.push(miniMax(moved[0], moved[1], width, height));
        }
    }
    // aggregate based on nestid
    return [0, 0];
}
