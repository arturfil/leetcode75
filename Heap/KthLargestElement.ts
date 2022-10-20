// class MaxPrioriotyQueue {
//     priority:any;
//     constructor(obj:any) {
//         this.priority = obj;
//     }

//     enqueue(x:number) {
//         // example
//     }

//     deuque() {
//         return {element: 3}; // example
//     }
// }

// function findKthLargest(nums:number[], k:number):number {
//     let max = 0;
//     const maxHeap = new MaxPrioriotyQueue({priority: (a:any) => a});

//     for(let num of nums) {
//         maxHeap.enqueue(num);
//     }
//     for(let i = 1; i <= k; i++) {
//         max = maxHeap.deuque().element // like a pop
//     }
//     return max;
// }

// Hoare's Algorithm Quick Select
function findKthLargest(nums:number[], k:number):number {
    const finalIdx = nums.length - k;
    let left = 0, right = nums.length-1;
    
    while(left <= right) {
        const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivotIdx = pivotHelper(pivot, left, right, nums);
        if(pivotIdx === finalIdx) return nums[finalIdx];
        if(pivotIdx < finalIdx) left = pivotIdx + 1;
        else right = pivotIdx - 1;
    }
    return finalIdx;
}

function pivotHelper(pivot:number, start:number, end:number, nums:number[]) {
    swap(pivot, end, nums);
    let i = start, j = start;
    while(j < end) {
        if(nums[j] <= nums[end]) {
            swap(i, j, nums);
            i++;
        } 
        j++;    
    }
    swap(i, end, nums);
    return i;
}

const swap = (i:number, j:number, nums:number[]) => [nums[i], nums[j]] = [nums[j], nums[i]]