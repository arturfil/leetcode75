export function maxProduct(nums: number[]): number {
    let max = nums[0], min = nums[0], product = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        let tempMax = Math.max(num, max * num, min * num);
        min = Math.min(num, max * num, min * num);
        max = tempMax;
        product = Math.max(max, product);
    }
    return product;
}
