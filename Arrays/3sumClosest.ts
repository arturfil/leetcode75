export function threeSumClosest(nums: number[], target: number): number {
    let min_diff = Infinity;
    nums.sort((a,b) => a - b);
    
    for(let i = 0; i < nums.length; i++) {
        let left = i + 1, right = nums.length-1
    
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (Math.abs(target - sum) < Math.abs(min_diff)) {
                min_diff = target - sum;
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
        
    }
    return target - min_diff;
};