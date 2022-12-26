function numIslands(grid: string[][]) {
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            count += 1;
            dfs(grid, i, j);
        }
    }
    return count;
}

function dfs(grid: string[][], i: number, j: number) {
    if (grid[i][j] === "0") return;
    grid[i][j] = "0";

    if (i < grid.length-1) dfs(grid, i + 1, j);
    if (j < grid[i].length-1) dfs(grid, i, j + 1);
    if (i > 0) dfs(grid, i - 1, j);
    if (j > 0) dfs(grid, i, j - 1);
}

function bfs(grid:string[][], row:number, col:number) {
    let queue = [[row, col]];
    let directions = [[1,0],[-1,0],[0,1],[0, -1]]; // down, up, right, left;
    
    while (queue.length > 0) {
        
        for(let i = 0; i < queue.length; i++) {
            let [row, col] = queue.shift()!;
            for(let dir of directions) {
                let newRow = row + dir[0], newCol = col + dir[1];
                if (newRow >= grid.length || newRow < 0 ||newCol >= grid[newRow].length || newCol < 0) continue
                if (grid[newRow][newCol] === "0") continue;
                grid[newRow][newCol] = "0";
                queue.push([newRow, newCol]);
            }
        }
    }
}

export default numIslands;