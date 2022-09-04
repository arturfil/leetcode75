export function numIslands(grid: string[][]) {
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