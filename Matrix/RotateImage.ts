export function rotate(matrix: number[][]): void {
    matrix.reverse();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}

























export function alt(matrix: number[][]): void {
    printMatrix(matrix)
    let n = matrix.length;
    // transpose
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }
    printMatrix(matrix);
    // reflect
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < Math.floor(n/2); j++) {
            [matrix[i][j],matrix[i][n-j-1]] = [matrix[i][n-j-1],matrix[i][j]];
        }
    }
    printMatrix(matrix);
}

function printMatrix(matrix: number[][]) {
    let s = "[\n"
    for(let i = 0; i < matrix.length; i++) {
        s += "  ["
        for (let j = 0; j < matrix[i].length; j++) {
            s += ` ${matrix[i][j]}, `;
        }
        s += "]\n"
    }
    s += "]"
    console.log(s);
}