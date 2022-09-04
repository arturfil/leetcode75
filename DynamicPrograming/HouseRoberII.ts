export function rob(nums: number[]): number {
    let first_ex = helper(nums.slice(1));
    let last_ex = helper(nums.slice(0, -1));

    return Math.max(nums[0], first_ex, last_ex);
}

function helper(nums: number[]): number {
    let rob1 = 0, rob2 = 0;
    for (let n of nums) {
        let newRob = Math.max(rob1 + n, rob2);
        rob1 = rob2;
        rob2 = newRob;
    }
    return rob2;
}