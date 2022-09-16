export function spiralOrder(matrix: number[][]): number[] {
    let res:number[] = [], rows = matrix.length, cols = matrix[0].length;
    let up = 0, down = rows - 1, left = 0, right = cols - 1;

    while (res.length < rows * cols) {
        for (let col = left; col <= right; col++) {
            res.push(matrix[up][col]);  
        }
        for (let row = up + 1; row <= down; row++) {
            res.push(matrix[row][right]);
        }
        if (up === down || left === right) break;

        for(let col = right - 1; col >= left; col--) {
            res.push(matrix[down][col]);
        }
        for(let row = down - 1; row > up; row--) {
            res.push(matrix[row][left]);
        }
        left++, up++, right--, down--;
    }
    return res;
}