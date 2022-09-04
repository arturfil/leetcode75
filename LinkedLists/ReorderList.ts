import { ListNode } from "./ListNode";

export function reorderList(head: ListNode | null): void {
    if (!head) return;
    let slow = head, fast = head;
    // find halfway
    while (fast && fast.next) {
        slow = slow!.next!;
        fast = fast.next.next!;
    }
    // start on 2nd half and reverse
    // let secondStart = slow!.next;
    let prev = null;
    while (slow !== null) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp!;
    }

    // merge TwoLists
    let first = head;
    let second = prev
    
    while (second?.next) {
        let temp = first.next;
        first.next = second;
        first = temp!;

        temp = second.next;
        second.next = first;
        second = temp;
    }
}