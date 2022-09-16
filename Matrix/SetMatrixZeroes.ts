export function  setZeroes(matrix: number[][]): void {
    let col_zero = 1, row = matrix.length, col = matrix[0].length;
    // go through all rows
    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) col_zero = 0;

        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // go in reverse through all columns
    for (let i = row-1; i >= 0; i--) {
        for (let j = col-1; j > 0; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
        }
        if (col_zero === 0) matrix[i][0] = 0;
    }
}