export function maxProduct(nums: number[]): number {
    if (nums.length === 0) return 0;
    let max = nums[0], min = nums[0], product = nums[0];
    for (let num of nums) {
        let tempMax = Math.max(num, max * num, min * num);
        min = Math.min(num, max * num, min * num);
        max = tempMax;
        product = Math.max(max, product);
    }
    return product;
}