export function rob(nums: number[]): number {
    let house1 = 0, house2 = 0;
    for (let n of nums) {
        let temp = Math.max(house1 + n, house2)
        house1 = house2;
        house2 = temp
    }
    return house2;
}