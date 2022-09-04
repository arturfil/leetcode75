export function maxArea(height: number[]): number {
    let max = 0, left = 0, right = height.length-1;
    while (left < right) {
        let base = right - left;
        let current_height = Math.min(height[left], height[right]);
        max = Math.max(max, base * current_height);
        if (height[left] < height[right]) left++;
        else right--
    }
    return max;
}