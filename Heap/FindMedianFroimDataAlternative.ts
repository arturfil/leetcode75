// class MedianFinder {
//     minHeap = new MinPriorityQueue({
//       priority: (val) => val,
//     });
//     maxHeap = new MaxPriorityQueue({
//       priority: (val) => val,
//     });
  
//     addNum(num: number): void {
//       if (this.minHeap.size()===0 || num > this.minHeap.front().element) {
//         this.minHeap.enqueue(num);
//       } else {
//         this.maxHeap.enqueue(num);
//       }
//       if (this.minHeap.size() > this.maxHeap.size() + 1) {
//         this.maxHeap.enqueue(this.minHeap.dequeue().element);
//       }
//       if (this.maxHeap.size() > this.minHeap.size() + 1) {
//         this.minHeap.enqueue(this.maxHeap.dequeue().element);
//       }
//     }
  
//     findMedian(): number {
//       if (this.minHeap.size() === this.maxHeap.size()) {
//         return (this.minHeap.front().element + this.maxHeap.front().element) / 2;
//       }
//       if (this.minHeap.size() > this.maxHeap.size())
//         return this.minHeap.front().element;
//       else return this.maxHeap.front().element;
//     }
//   }


class MedianFinderAlternative {
    left: MaxHeap<number, number>;
    right: MinHeapF<number, number>;

    constructor() {
        this.left = new MaxHeap<number, number>();
        this.right = new MinHeapF<number, number>();
    }

    addNum(num: number): void {
        this.left.push(num);
        if (this.left.length() - this.right.length() > 1 ) {
            this.right.push(this.left.pop()!);
        }
        if(this.left.peek() > this.right.peek()){
            let maxElement = this.right.pop();
            this.right.push(this.left.pop()!);
            this.left.push(maxElement!);
        }
    }

    findMedian(): number {
        if (this.right.length() === 0)
            return this.left.peek();
        if ((this.left.length() + this.right.length()) % 2 === 0)
            return (this.left.peek() + this.right.peek()) / 2;
        return this.left.peek();
    }
}


class MaxHeap<E extends any,V extends string|number> {
    public data: E[];

    constructor(private valueConverter:(element:E)=>V=(element:E):V=>element as unknown as V) {
        this.data = [];
    }

    length(){
        return this.data.length;
    }

    peek(){
        return this.data[0];
    }

    getParentIndex(index: number) {
        return Math.floor((index - 1) / 2);
    }

    getLeftIndex(index: number) {
        return (index * 2) + 1;
    }

    getRightIndex(index: number) {
        return (index * 2) + 2;
    }

    private getValue(index:number):V{
        return this.valueConverter(this.data[index]);
    }

    push(val: E) {
        this.data.push(val);
        let lastIndex = this.data.length-1;
        while (lastIndex > 0 && this.getValue(this.getParentIndex(lastIndex)) < this.getValue(lastIndex)) {
            let parentIndex = this.getParentIndex(lastIndex);
            this.swap(parentIndex,lastIndex);
            lastIndex = parentIndex;
        }
    }

    private swap(sIndex: number, tIndex: number) {
        let element = this.data[sIndex];
        this.data[sIndex] = this.data[tIndex];
        this.data[tIndex] = element;
    }

    pop(): E | undefined{
        if (this.data.length === 0)
            return undefined;
        if(this.data.length===1){
            return this.data.splice(0,1)[0];
        }
        let res = this.data[0];
        this.data[0] = this.data.pop()!;
        let index = 0;
        while (true) {
            let leftIndex = this.getLeftIndex(index);
            let rightIndex = this.getRightIndex(index);
            if ((leftIndex<this.data.length && this.getValue(index) < this.getValue(leftIndex)) ||
                (rightIndex<this.data.length && this.getValue(index) < this.getValue(rightIndex))) {
                let largestIndex = leftIndex;
                if(rightIndex<this.data.length && this.getValue(leftIndex)<this.getValue(rightIndex)) {
                    largestIndex = rightIndex;
                }
                this.swap(largestIndex,index);
                index = largestIndex;
                continue;
            }
            break;
        }
        return res;
    }

    add(arr: any[]) {
        for (let element of arr)
            this.push(element);
    }
}

class MinHeapF<E extends any,V extends string|number> {
    public data: E[];

    constructor(private valueConverter:(element:E)=>V=(element:E):V=>element as unknown as V) {
        this.data = [];
    }

    length(){
        return this.data.length;
    }

    peek(){
        return this.data[0];
    }

    getParentIndex(index: number) {
        return Math.floor((index - 1) / 2);
    }

    getLeftIndex(index: number) {
        return (index * 2) + 1;
    }

    getRightIndex(index: number) {
        return (index * 2) + 2;
    }

    private getValue(index:number):V{
        return this.valueConverter(this.data[index]);
    }

    push(val: E) {
        this.data.push(val);
        let lastIndex = this.data.length-1;
        while (lastIndex > 0 && this.getValue(this.getParentIndex(lastIndex)) > this.getValue(lastIndex)) {
            let parentIndex = this.getParentIndex(lastIndex);
            this.swap(parentIndex,lastIndex);
            lastIndex = parentIndex;
        }
    }

    private swap(sIndex: number, tIndex: number) {
        let element = this.data[sIndex];
        this.data[sIndex] = this.data[tIndex];
        this.data[tIndex] = element;
    }

    pop(): E | undefined{
        if (this.data.length === 0)
            return undefined;
        if(this.data.length===1){
            return this.data.splice(0,1)[0];
        }
        let res = this.data[0];
        this.data[0] = this.data.pop()!;
        let index = 0;
        while (true) {
            let leftIndex = this.getLeftIndex(index);
            let rightIndex = this.getRightIndex(index);
            if ((leftIndex<this.data.length && this.getValue(index) > this.getValue(leftIndex)) ||
                (rightIndex<this.data.length && this.getValue(index) > this.getValue(rightIndex))) {
                let largestIndex = leftIndex;
                if(rightIndex<this.data.length && this.getValue(leftIndex)>this.getValue(rightIndex)) {
                    largestIndex = rightIndex;
                }
                this.swap(largestIndex,index);
                index = largestIndex;
                continue;
            }
            break;
        }
        return res;
    }

    add(arr: any[]) {
        for (let element of arr)
            this.push(element);
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */