export function longestCommonSubsequenceAlt(text1: string, text2: string): number {
    let max = 0
    let dp = new Array(text1.length + 1).fill(0).map(_ => new Array(text2.length + 1).fill(0))
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