import { TreeNode } from "./TreeNode";

/**
 * Time complexity O(n)
 * Space complexity O(n)
 */

export function kthSmallest(root: TreeNode | null, k: number): number | void {
    const stack = [];
    let n = 0;
    let current = root;
    
    while (true) {
        // you are going all left until null
        if (current) {
            stack.push(current)
            current = current.left;
        } else {
            // once current == null you pop values until n === k
            // where current is the kth smallest,
            // or need to keep going deeper to the right node && LEFT again
            current = stack.pop()!;
            n += 1;
            if (n === k) return current.val;
            current = current.right;
        }
    }
}

