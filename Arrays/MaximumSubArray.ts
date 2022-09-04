export function maxSubArray(nums: number[]) {
    let max = nums[0], current = 0;
    // [-2,1,-3,4,-1,2,1,-5,4];
    // 4, 1, 2, 1 -> 6
    for (let i = 0; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i]);
        max = Math.max(max, current);
    }
    return max;
}

/**
 * let test = [-2,1,-3,4,-1,2,1,-5,4]
    console.log(maxSubArray(test));
 */