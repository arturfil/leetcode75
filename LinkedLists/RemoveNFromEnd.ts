import { ListNode } from "./ListNode";

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // create dummy nodes
    let currNode = head, nodeBeforeN = head;
    // get all the way to N node to delete
    for (let i = 0; i < n; i++) {
        currNode = currNode!.next;
    }
    // edge case of list of 1 // return null because 
    // there wont be a list
    if (!currNode) {
        return head!.next;
    }
    // now we shift both pointers by n therefore we will 
    // have the previousNodeBefore n where we want to delete the node
    while (currNode.next) {
        nodeBeforeN = nodeBeforeN!.next;
        currNode = currNode!.next;
    }
    // here we now poin nodeBeforeN.next to .next.next to make the deletion
    nodeBeforeN!.next = nodeBeforeN!.next!.next
    return head;
}

/*
    let l1 = new ListNode(1);
    let l2 = new ListNode(2);
    let l3 = new ListNode(3);
    let l4 = new ListNode(4);
    let l5 = new ListNode(5);

    l1.next = l2;
    l2.next = l3;
    l3.next = l4;
    l4.next = l5;

    removeNthFromEnd(l1, 2);
 */