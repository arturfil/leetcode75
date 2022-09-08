/**
 * Max & Min priority queue as
 */

class MedianFinder {
    /*
    minHeap = new MinPriorityQueue({
        priority: (val) => val,
    });
    maxHeap = new MaxPriorityQueue({
        priority: (val) => val,
    });
  
    addNum(num: number): void {
        if (this.minHeap.size()===0 || num > this.minHeap.front().element) {
            this.minHeap.enqueue(num);
        } else {
            this.maxHeap.enqueue(num);
        }
        if (this.minHeap.size() > this.maxHeap.size() + 1) {
            this.maxHeap.enqueue(this.minHeap.dequeue().element);
        }
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue().element);
        }
    }
  
    findMedian(): number {
        if (this.minHeap.size() === this.maxHeap.size()) {
            return (this.minHeap.front().element + this.maxHeap.front().element) / 2;
        }
        if (this.minHeap.size() > this.maxHeap.size())
            return this.minHeap.front().element;
        else return this.maxHeap.front().element;
    }
    */
}
