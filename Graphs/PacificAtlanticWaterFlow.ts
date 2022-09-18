// Time: O(m * n)
// Space: O(m * n)

export function pacificAtlantic(matrix: number[][]):number[][] {
    if (matrix.length === 0) return [];
    let rows = matrix.length, cols = matrix[0].length;
    const pacific = new Array(rows).fill([]).map(_ => new Array(cols).fill(0));
    const atlantic = new Array(rows).fill([]).map(_ => new Array(cols).fill(0));
    const result = [];
    // top and botom
    for (let i = 0; i < matrix[0].length; i++) {
      dfs(matrix, 0, i, -Infinity, pacific);
      dfs(matrix, matrix.length - 1, i, -Infinity, atlantic);
    }
    // left and right
    for (let i = 0; i < matrix.length; i++) {
      dfs(matrix, i, 0, -Infinity, pacific);
      dfs(matrix, i, matrix[0].length - 1, -Infinity, atlantic);
    }
    // here you are going through the matrix where there is a 1 in both.
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (pacific[i][j] === 1 && atlantic[i][j] === 1) {
          result.push([i, j]); // if both have 1 push [x,y] to result
        }
      }
    }
    return result;
  };
  
  function dfs(matrix:number[][], row:number, col:number, previous:number, ocean:number[][]) {
    // within boundries
    if (!isValid(matrix, row, col)) return;
    // current = 3 < previous = 8, then return 
    // because it can't travel there.
    if (matrix[row][col] < previous) return;
    // [x,y] === 1 no need to keep on going
    if (ocean[row][col] === 1) return;
    // in the case that it is zero -> change to 1;
    ocean[row][col] = 1;
    dfs(matrix, row + 1, col, matrix[row][col], ocean);
    dfs(matrix, row - 1, col, matrix[row][col], ocean);
    dfs(matrix, row, col + 1, matrix[row][col], ocean);
    dfs(matrix, row, col - 1, matrix[row][col], ocean);
  }
  
  function isValid(matrix:number[][], row:number, col:number) {
    const rowIsValid = row >= 0 && row < matrix.length;
    const colIsValid = col >= 0 && col < matrix[0].length;
    return rowIsValid && colIsValid;
  }