export function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();
    let heap:any = [];
    const res = [];

    // add values to map
    for (let num of nums) {
        if (freq.has(num)) {
            freq.set(num, freq.get(num)! + 1)
        } else {
            freq.set(num, 1);
        }
    }
    // add values to heap
    for (let [key, val] of freq) {
        console.log([key, val])
        heap.push([key, val])
    }
    heap = heap.sort((a:any, b:any) => b[1] - a[1]).map((e:number[]) => e[0]) // heapify by freq
    // this is truly of k*log(n); // extracting from heap
    for (let i = 0; i < k; i++) {
        res[i] = heap.shift();
    }
    return res;
}

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

/**
 * console.log(bucketSort([1,2,4,4,4,3,1,1,2], 2));
 */