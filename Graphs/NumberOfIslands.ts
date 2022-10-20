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

function bfs(grid: string[][], i:number, j:number) {
    let queue = [], directions = [[1,0], [-1, 0], [0, 1], [0, -1]] // down, up, righ, left;
    queue.push([i,j]);
    
    while(queue.length > 0) {
        for(let i = 0; i < queue.length; i++) {
            let current:number[] = queue.shift()!; // pop in queue or first value
            for(let dir of directions) {
                let r = current[0] + dir[0];
                let c = current[1] + dir[1];
                if (r < 0 || r >= grid.length ||
                    c < 0 || c >= grid[r].length || 
                    grid[r][c] === "0"){
                        continue;
                }
                grid[r][c] = "0"
                queue.push([r,c])
            }
        }
    }
}

export default numIslands;