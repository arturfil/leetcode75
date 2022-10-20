export function bucketSort(nums: number[], k: number) {
    const map = new Map<number, number>();
    const buckets = new Array(nums.length + 1).fill(0).map(x => new Array().fill([]));

    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num)! + 1)
        } else {
            map.set(num, 1);
        }
    }

    for (let [num, count] of map.entries()) {
        buckets[count!].push(num);
    }

    const flat_buckets = buckets.flat();
    return flat_buckets.slice(flat_buckets.length - k);
}

// export function topKFrequent(nums: number[], k: number): number[] {
//     const map = new Map<number, number>();
//     const maxHeap = new MaxPriorityQueue({
//         priority: (obj) => obj[1]
//     })
//     const res = [];

//     // add values to map
//     for (let num of nums) {
//         if (map.has(num)) {
//             map.set(num, map.get(num)! + 1)
//         } else {
//             map.set(num, 1);
//         }
//     }
//     // add values to heap
//     for (let entry of map) {
//         maxHeap.enqueue(entry);
//     }

//     for (let i = 0; i < k; i++) {
//         res.push(maxHeap.dequeue().element[0]);
//     }

//     return res;
// }



/**
 * console.log(bucketSort([1,2,4,4,4,3,1,1,2], 2));
 */