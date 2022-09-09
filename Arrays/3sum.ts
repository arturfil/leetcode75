export function threeSum(nums: number[]): number[][] {
    const solution:number[][] = []
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        let left = i+1, right = nums.length-1;
        // avoid repetitions in outer loop
        if (i > 0 && nums[i] === nums[i - 1]) continue; 
        while (left < right) {
            if ( nums[i] + nums[left] + nums[right] < 0) {
                left++;
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--;
            } else {
                solution.push([nums[i], nums[left], nums[right]]);
                left++;
                // avoid repetitions in second loop
                while (nums[left] === nums[left - 1] && left < right) left++;
            }
        }
    }
    return solution;
}