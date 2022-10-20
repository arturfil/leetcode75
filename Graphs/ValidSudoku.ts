function isValidSudoku(board: string[][]): boolean {
    let state = new Set();
    const side = 9;

    for(let row = 0; row < side; row++) {
        for(let column = 0; column < side; column++) {
            
            const value = board[row][column];

            if (value === ".") continue;
            const rowRecord = `row ${row} value ${value}`;
            const columnRecord = `column ${column} value ${value}`;
            const boxRecord = `box ${Math.floor(row / 3)} / ${Math.floor(column / 3)} value ${value}`;

            if (state.has(rowRecord) || state.has(columnRecord) || state.has(boxRecord)) {
                return false;
            }

            state.add(rowRecord)
            state.add(columnRecord)
            state.add(boxRecord);
        }
    }

    return true;
};