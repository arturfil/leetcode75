// MinHeap
function kClosestA(points: number[][], k: number): number[][] {
    let res:any[] = [];
    const minHeap = new MinPriorityQueue({ // from leetcode
        priority: (obj:any) => obj[1]
    });
    for(let point of points) {
        let dist = Math.sqrt((point[0]-0)**2 + (point[1] - 0)**2);
        minHeap.enqueue([point, dist]);
    }
    for (let i = 1; i <= k; i++) {
        res.push(minHeap.dequeue().element[0]);
    }
    
    return res;
};

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: //

// Hoare's algorithm;
function kClosest(points: number[][], k: number): number[][] {
    let left = 0,right = points.length - 1;
    let pivotIndex = points.length;
    while (pivotIndex !== k) {
        pivotIndex = partition(points, left, right);
        if (pivotIndex < k) {
            left = pivotIndex;
        } else {
            right = pivotIndex - 1;
        }
    }
    return points.slice(0, k);
}

function partition(points:number[][], left:number, right:number) {
    let randIdx = Math.floor(Math.random() * (right - left + 1)) + left;
    let pivot = points[randIdx];
    let pivotDist = squaredDistance(pivot[0], pivot[1]);
    while (left < right) {
        if (squaredDistance(points[left][0], points[left][1]) >= pivotDist) {
            [points[left], points[right]] = [points[right], points[left]];
            right--;
        } else {
            left++;
        }
    }
    if (squaredDistance(points[left][0], points[left][1]) < pivotDist) {
        left++;
    }
    return left;
};

const squaredDistance = (x:number, y:number) => x ** 2 + y ** 2;

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: //

class MinPriorityQueue {
    priority:any;
    constructor(obj:any) {
        this.priority = obj;
    }

    enqueue(x:any) {
        // example
    }

    dequeue() {
        let obj = {element: [0,2]}
        return obj; // example
    }
}
