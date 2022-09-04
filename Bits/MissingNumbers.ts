export function missingNumber(nums: number[]): number {
    let sum = nums.length;
    for(let i = 0; i < nums.length; i++) {
        sum += (i - nums[i]);
    }
    return sum;
}

export function missingNumberBits(nums: number[]): number {
    let missing = nums.length;
    for(let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}