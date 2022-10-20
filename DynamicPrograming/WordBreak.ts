export function wordBreak(s: string, wordDict: string[]): boolean{
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < s.length; i++) {
        if (dp[i] === true) {
            for (let w of wordDict) {
                if (s.slice(i, i + w.length) === w) {
                    dp[i + w.length] = true;
                }
            }
        }
    }
    return dp[s.length];
}