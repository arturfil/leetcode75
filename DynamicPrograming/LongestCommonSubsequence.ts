export function longestCommonSubsequenceAlt(text1: string, text2: string): number {
    let max = 0, dp = new Array(text1.length + 1).fill(0);
    dp = dp.map(x => new Array(text2.length + 1).fill(0));
    for (let x = text1.length -1; x >= 0; x--) {
        for (let y = text2.length - 1; y >= 0; y--) {
            if (text1[x] === text2[y]) {
                dp[x][y] = 1 + dp[x + 1][y + 1];
            } else {
                dp[x][y] = Math.max(dp[x + 1][y], dp[x][y + 1]);
            }
            max = Math.max(max, dp[x][y]);
        }
    }
    return max
}

// export function longestCommonSubsequence(text1: string, text2: string): number {
//     let dp = [], max = 0;
//     for (let i = 0; i <= text1.length; i++) { // we do these because it's a 2D array and avoid same referencing;
//         dp.push(new Array(text2.length + 1).fill(0));
//     }
//     for(let i = 1; i < dp.length; i++) {
//         for(let j = 1; j < dp[0].length; j++) {
//             if(text1[i-1] === text2[j-1]) {
//                 dp[i][j] = dp[i-1][j-1] + 1
//             } else {
//                 dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
//             }
//             max = Math.max(max, dp[i][j]);
//         }
//     }
//     return max;
// }

