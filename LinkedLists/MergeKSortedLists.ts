import { ListNode } from "./ListNode";

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let root = lists[0];

    for (let i = 1; i < lists.length; i++) {
        root = mergeTwoLists(root, lists[i]);
    }
    return root || null
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let tempNode = new ListNode(0);
    let current = tempNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1) current.next = list1;
    if (list2) current.next = list2;

    return tempNode.next;
}