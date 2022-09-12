export function canJump(nums: number[]): boolean {
    let prev = nums.length-1;
    for (let i = nums.length-2; i >= 0; i--) {
        if (i + nums[i] >= prev) {
            prev = i;
        }
    }
    return prev === 0;
}
