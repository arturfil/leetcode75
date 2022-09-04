function TwoSum(nums:number[], target: number):number[] {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let current = target - nums[i]
        if (map.has(current)) {
            return [map.get(current), i];
        } else {
            map.set(nums[i], i)
        }
    }
    return [-1, -1]
}
