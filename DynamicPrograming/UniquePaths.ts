/**
 * 
 * Time complexity O(M x N)
 * 
 * Space complexity also O(N), linear space complexity
 */

export function uniquePaths(m: number, n: number): number {
    const dp = new Array(n + 1).fill(1);

    for (let row = m - 1; row > 0; row--) {
        for(let col = n - 1; col > 0; col--) {
            dp[col] = dp[col] + dp[col + 1];
        }
    }
    return dp[1];
};

export function uniquePathsDP(m:number, n:number) {
    const dp = new Array(m + 1).fill(0);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(1);
    }
    
    dp[m][n] = 1;
    for(let row = m - 1; row > 0; row--){
        for(let col = n - 1; col > 0; col--){
            dp[row][col] = dp[row + 1][col] + dp[row][col + 1];
        }
    }
    
    return dp[1][1];
};