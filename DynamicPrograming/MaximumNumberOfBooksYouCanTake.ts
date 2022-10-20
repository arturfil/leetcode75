function maximumBooks(books: number[]): number {
    let dp = new Array(books.length).fill(0), stack:number[] = [];
    dp[0] = books[0];
    let res = 0;
    for(let i = 0; i < books.length; i++) {
        while (stack.length > 0 && books[stack[stack.length-1]] >= (books[i] - (i - stack[stack.length-1])) ) {
            stack.pop()
        }
        let current = Math.floor(books[i] * (books[i] + 1)/2);
        if (stack.length > 0) {
            let dist = books[i] - (i - stack[stack.length-1]);
            current -= Math.floor(dist * (dist + 1)/2);
            current += dp[stack[stack.length-1]];
        } else {
            let dist = Math.max(0, books[i] - (i + 1));
            current -= Math.floor(dist * (dist + 1) / 2);
        }
        res = Math.max(res, current);
        dp[i] = current;
        stack.push(i)
    }    
    return res;
}

export default maximumBooks;