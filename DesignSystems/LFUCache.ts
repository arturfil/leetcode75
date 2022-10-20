class LFUNode {
    key: number;
    val: number;
    freq: number;
    next: LFUNode | null;
    prev: LFUNode | null;
    constructor(key: number,val: number) {
        this.key = key;
        this.val = val;
        this.freq = 1;
        this.next = null;
        this.prev = null;
    } 
}
class DLL {
    head: LFUNode;
    tail: LFUNode;
    constructor() {
        this.head = new LFUNode(-1,-1);
        this.tail = new LFUNode(-1,-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
}

class LFUCache {
    map: {[key: number]: LFUNode};
    freq: {[key: number]: DLL};
    minFreq: number;
    curSize: number;
    maxSize: number;
    constructor(capacity: number) {
        this.map = {};
        let startDll = new DLL()
        this.freq = {1: startDll}
        this.minFreq = 1;
        this.maxSize = capacity;
        this.curSize = 0;
    }

    get(key: number): number {
        if(!this.map.hasOwnProperty(key) || this.maxSize == 0) return -1;
        let node = this.map[key];
        let dll = this.freq[node.freq];
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
        // check if the dll is empty after removing the node
        if(dll.head.next == dll.tail && this.minFreq == node.freq) this.minFreq = node.freq + 1;
        node.freq += 1;
        if(!this.freq.hasOwnProperty(node.freq)) {
            let newDll = new DLL();
            this.freq[node.freq] = newDll;
        }
        dll = this.freq[node.freq];
        node.next = dll.head.next;
        dll.head.next!.prev = node;
        dll.head.next = node;
        node.prev = dll.head;
        return node.val;
    }

    put(key: number, value: number): void {
        if(this.maxSize == 0 )return;
        if(this.map.hasOwnProperty(key)) {
            this.map[key].val = value;
            this.get(key);
            return;
        }
        this.curSize += 1;
        if(this.curSize > this.maxSize) {
            let dll = this.freq[this.minFreq];
            let dNode = dll.tail.prev;
            dNode!.prev!.next = dll.tail;
            dll.tail.prev = dNode!.prev;
            delete this.map[dNode!.key];
            this.curSize -= 1;
        }
        let node = new LFUNode(key,value);
        this.map[key] = node;
        this.minFreq = 1;
        let dll = this.freq[this.minFreq];
        dll.head.next!.prev = node;
        node.next = dll.head.next;
        dll.head.next = node;
        node.prev = dll.head;
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */