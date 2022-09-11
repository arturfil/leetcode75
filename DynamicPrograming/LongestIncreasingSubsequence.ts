/*
    Time complexitiy O(n^2), mem O(n);
    Try to think of it backwards. in order
*/

export function lenghtOFLIS(nums: number[]): number {
    const dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
    return Math.max(...dp)
}