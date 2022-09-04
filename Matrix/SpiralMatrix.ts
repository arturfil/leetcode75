export function spiralOrder(matrix: number[][]): number[] {
    let result:number[] = [];
    let rows = matrix.length, cols = matrix[0].length;
    let up = 0, down = rows - 1;
    let left = 0, right = cols - 1;

    while (result.length < rows * cols) {
        for (let col = left; col <= right; col++) {
          result.push(matrix[up][col]);  
        } 
        
        for (let row = up + 1; row <= down; row++) {
            result.push(matrix[row][right]);
        }
        
        if (up === down || left === right) break;

        for(let col = right - 1; col >= left; col--) {
            result.push(matrix[down][col]);
        }
            
        for(let row = down - 1; row > up; row--) {
            result.push(matrix[row][left]);
        }
            
        left++, up++, right--, down--;
    }
    return result;
}