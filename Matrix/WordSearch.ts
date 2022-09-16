export function exist(board: string[][], word: string): boolean {
    for(let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0] && dfs(board, i, j, word, 0))
                return true;
        }
    }
    return false;
}

function dfs(board: string[][],  row: number, col: number, word: string, index: number) {
    if (word.length === index) return true;
    if (row >= board.length || row < 0 || board[row][col] !== word[index]) return false;

    board[row][col] = "#"
    // return dfs
    if (
        dfs(board, row + 1, col, word, index + 1) ||
        dfs(board, row, col + 1, word, index + 1) ||
        dfs(board, row - 1, col, word, index + 1) ||
        dfs(board, row, col - 1, word, index + 1)
    ) return true;
    board[row][col] = word[index];
}