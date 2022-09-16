import { ListNode } from "./ListNode";

export function reorderList(head: ListNode | null): void {
    if (!head) return;
    let slow = head, fast = head;
    // find halfway
    // when fast reached null, slow will reach halfway
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;
    }
    // reversing first half
    let prev = null;
    while (slow !== null) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp!;
    }
    
    //  second list
    let first = head;
    // fist list
    let second = prev;
    //  merge TwoLists
    while (second?.next) {
        let temp = first.next;
        first.next = second;
        first = temp!;
              
        temp = second.next;
        second.next = first;
        second = temp;
    }
}