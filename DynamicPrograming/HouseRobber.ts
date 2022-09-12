export function rob(nums: number[]): number {
    let low_max = 0, big_max = 0
    for (let n of nums) {
        let temp_max = Math.max(low_max + n, big_max);
        low_max = big_max
        big_max = temp_max;
    }
    return big_max;
}