export function maxArea(height: number[]): number {
    let left = 0, right = height.length-1, max_area = 0;
    
    while (left < right) {
        let min_height = Math.min(height[left], height[right]);
        let area = (right - left) * min_height;
        max_area = Math.max(area, max_area );
        if (height[left] < height[right]) left++;
        else right--;
    }
    return max_area;
};