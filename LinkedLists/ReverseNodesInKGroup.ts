import { ListNode } from "./ListNode";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const stack = [], dummyHead = new ListNode();
    dummyHead.next = head;
    let tail = dummyHead;
    while (head) {
        for (let i = 0; i < k && head; i++) {
            stack.push(head);
            head = head.next
        }
        if (stack.length === k) {
            while (stack.length > 0) {
                tail.next = stack.pop()!;
                tail = tail.next;
            }
            tail.next = head;
        }
    }
    return dummyHead.next;
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: //

function reverseKGroupAlt(head: ListNode | null, k: number): ListNode | null {
    let dummy = head;
    for(let i = 1; i < k && dummy; i++) dummy = dummy.next;
    if (dummy === null) return head;
    dummy.next = reverseKGroupAlt(dummy.next, k);
    reverse(head!, dummy);
    return dummy;
}

function reverse(head: ListNode, tail: ListNode) {
    const tailNext = tail.next;
    let prev = tailNext;
    while (head !== tailNext) {
        const temp = head.next;
        head.next = prev;
        prev = head;
        head = temp!;
    }
}