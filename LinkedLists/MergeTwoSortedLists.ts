import { ListNode } from "./ListNode";

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    
    if (list1.val >= list2.val) {
        list1 = list1
        return mergeTwoLists(list1.next, list2);
    } else {
        list1 = list2;
        return mergeTwoLists(list1, list2.next);
    }
}