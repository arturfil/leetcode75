import { ListNode } from "./ListNode";

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let root = lists[0];

    for (let i = 1; i < lists.length; i++) {
        root = mergeTwoSortedLists(root, lists[i]);
    }
    return root || null
}

export function mergeTwoSortedLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoSortedLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoSortedLists(list1, list2.next);
        return list2;
    }
}