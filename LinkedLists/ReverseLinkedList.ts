import { ListNode } from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
    let previous = null;
    while (head != null) {
        let temp = head.next;
        head.next = previous;
        previous = head;
        head = temp;
    }
    return previous; // true last node or the first reversed one
};