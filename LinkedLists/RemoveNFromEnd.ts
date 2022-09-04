import { ListNode } from "./ListNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
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