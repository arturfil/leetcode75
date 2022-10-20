class ListNode {
    key:number;
    val:number;
    prev:ListNode |  null = null;
    next:ListNode |  null = null;

    constructor(key:number, val:number) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head = new ListNode(0,0);
    tail = new ListNode(0,0);
    constructor() {
        this.head.next = this.tail;
        this.tail.next = this.head;
    }

    insertHead(node:ListNode) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    ListremoveNode(node:ListNode) {
        let prev = node.prev;
        let next = node.next;
        prev!.next = next;
        next!.prev = prev;
    }

    moveToHead(node:ListNode) {
        this.ListremoveNode(node);
        this.insertHead(node);
    }

    removeTail() {
        let tail = this.tail.prev;
        this.ListremoveNode(tail!);
        return tail?.key;
    }
}

class LRUCache {
    capacity:number;
    map = new Map<number,ListNode>();
    dll = new DoublyLinkedList();

    constructor(capacity:number) {
        this.capacity = capacity;
    }

    get(key: number):number {
        let node = this.map.get(key);
        if (!node) return -1;
        this.dll.moveToHead(node);
        return node.val;
    }

    put(key:number, value:number):void {
        let node = this.map.get(key);
        if (!node) {
            let ListnewNode = new ListNode(key, value);
            this.map.set(key, ListnewNode);
            this.dll.insertHead(ListnewNode);
            if (this.map.size > this.capacity) {
                let tailKey = this.dll.removeTail();
                this.map.delete(tailKey!);
            }
        } else {
            node.val = value;
            this.dll.moveToHead(node);
        }
    }
}