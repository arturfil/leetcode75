export function numDecodings(s: string): number {
    if (s === null || s.length === 0) return 0;
    if (s[0] === '0') return 0;
    
    const dp = new Array(s.length + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= s.length; i++) {
        const one_dig = Number(s.slice(i - 1, i)); // one digit
        const two_dig = Number(s.slice(i - 2, i)); // two digits
        
        if (one_dig >= 1 && one_dig <= 9) dp[i] += dp[i - 1];
        if (two_dig >= 10 && two_dig <= 26) dp[i] += dp[i - 2];
        
    }

    return dp[s.length];
}