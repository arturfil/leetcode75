import { ListNode } from "./ListNode";

// TODO: Read this 
// Time complexity O(Kn), 
// Space complexity O(1)

// you could also use a heap, insert the whole list and pop all and create the list upon the pop
// export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//     let root = lists[0];

//     for (let i = 1; i < lists.length; i++) {
//         root = mergeTwoSortedLists(root, lists[i]);
//     }
//     return root || null
// }

// function mergeTwoSortedLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     if (list1 === null) return list2;
//     if (list2 === null) return list1;

//     if (list1.val < list2.val) {
//         list1.next = mergeTwoSortedLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoSortedLists(list1, list2.next);
//         return list2;
//     }
// }

// <-----------------------------------------------------------------------------------------------------------> //

// TODO: Read
// Time complexity O(nlog(k))
// Space Complexity O(n)

// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//     const queue = new MinPriorityQueue({ priority: x => x.val })
  
//     for (const head of lists) {
//       if (head) {
//         queue.enqueue(head)
//       }
//     }
  
//     let result = new ListNode()
//     const head = result
  
//     while (!queue.isEmpty()) {
//       const { val, next } = queue.dequeue().element
  
//       result.next = new ListNode(val)
//       result = result.next
  
//       if (next) {
//         queue.enqueue(next)
//       }
//     }
  
//     return head.next
//   }
  
// -------------------------------------------------------------------------------------
// Time Complexity O(n log(k))
// Space Complexity O(1)
function mergeTwoSortedLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let temp = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    if (list1 !== null) temp.next = list1;
    if (list2 !== null) temp.next = list2;
    return dummy.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0 ) return null;

    while (lists.length > 1) {
        let a = lists.shift()!; // the head will contains the "less" length list
        let b = lists.shift()!; // acturally, we can use the linkedlist to replace it, the while loop will be the while( list.header.next !== null || lists.length > 0)
        const h = mergeTwoSortedLists(a, b);
        lists.push(h);
    }
    return lists[0];
};