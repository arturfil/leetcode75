class RandomNode {
    val: number
    next: RandomNode | null
    random: RandomNode | null
    constructor(val?: number, next?: RandomNode, random?: RandomNode) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}

function copyRandomList(head: RandomNode | null): RandomNode | null {
    if (!head) return null;
     const cloned = new Map();
     let current = head;
     // first copy all the nodes
     while (current) {
         let copy = new RandomNode(current.val);
         cloned.set(current, copy);
         current = current.next!;
     }
     // re-assign head and assign the pointers
     current = head;
     while (current) {
         cloned.get(current).next = cloned.get(current.next) || null;
         cloned.get(current).random = cloned.get(current.random) || null;
         current = current.next!;
     }
     return cloned.get(head);
 };