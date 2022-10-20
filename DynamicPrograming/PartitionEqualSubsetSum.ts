function canPartition(nums:number[]): boolean {
    let sum = nums.reduce((acc, i) => acc + i, 0);
    if (sum % 2 !== 0) return false;
    
    let target =  sum/2;
    let dp = new Array(target + 1).fill(0);
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }
    return dp[target] === target;
}