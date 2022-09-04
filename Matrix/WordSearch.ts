export function exist(board: string[][], word: string): boolean {
    let index = 0;
    for(let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            index = dfs(board, i, j, word, index);
        }
    }
    return index === board.length;
}

function dfs(board: string[][],  row: number, col: number, word: string, index: number) {
    if (board[row][col] !== word[index]) return index;
    if (row < board.length-1) dfs(board, row + 1, col, word, index + 1);
    if (col < board[row].length-1) dfs(board, row, col + 1, word, index + 1);
    if (row > 0) dfs(board, row - 1, col, word, index + 1);
    if (col > 0) dfs(board, row, col - 1, word, index + 1);
    return index;
}