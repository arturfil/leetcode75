/**
 * 
 * Time complexity is coins.length * amount => O(m * n) not realy n^2 but larger than linear.
 * 
 * 
 */

export function  coinChange(coins: number[], amount: number):number {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 :  dp[amount];
}