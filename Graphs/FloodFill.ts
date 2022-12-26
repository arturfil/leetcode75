function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    let old = image[sr][sc];
    if (image[sr][sc] !== color) 
        dfs(image, sr, sc, color, old);    
    return image;
};

function dfs(image:number[][], row:number, col:number, color:number, initial: number) {
    if (image[row][col] != initial) return;
    
    image[row][col] = color;
    
    if (row < image.length-1) dfs(image, row + 1, col, color, initial)
    if (row > 0) dfs(image, row - 1, col, color, initial)
    if (col < image[row].length-1) dfs(image, row, col + 1, color, initial)
    if (col > 0) dfs(image, row, col - 1, color, initial);
}