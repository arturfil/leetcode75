function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    let initial = image[sr][sc];
    if (image[sr][sc] !== color)
        bfs(image, sr, sc, color, initial);
    return image;
};
    
function bfs(image:number[][], row:number, col:number, color:number, initial: number) {
    image[row][col] = color;
    if (row < image.length-1 && image[row+1][col] === initial) 
        bfs(image, row + 1, col, color, initial)
    
    if (row > 0 && image[row-1][col] === initial) 
        bfs(image, row - 1, col, color, initial)
    
    if (col < image[row].length-1 && image[row][col+1] === initial) 
        bfs(image, row, col + 1, color, initial)
    
    if (col > 0 && image[row][col-1] === initial) 
        bfs(image, row, col - 1, color, initial);
}