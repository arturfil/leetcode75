function countComponents(n: number, edges: number[][]):number {
    const nums = Array(n).fill(-1);
    // union find
    for (let i = 0; i < edges.length; i++){
        const x = find(nums, edges[i][0]);
        const y = find(nums, edges[i][1]);
        // union
        if (x !== y) nums[x] = y;
    }
    return nums.filter(num => num === -1).length;
}

function find(nums:number[], i: number):number {
    if (nums[i] === -1) return i;
    return find(nums, nums[i]);
}