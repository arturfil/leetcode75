function trap(height: number[]): number {
    let units = 0, left = 0, right = height.length;
    let leftHeight = 0, rightHeight = 0;
    
    while (left <= right) {
        if (leftHeight <= rightHeight) {
            leftHeight = Math.max(leftHeight, height[left]);
            units += (leftHeight - height[left]);
            left++;
        } else {
            rightHeight = Math.max(rightHeight, height[right]);
            units += (rightHeight - height[right]);
            right--;
        }
    }
    
    return units;
};