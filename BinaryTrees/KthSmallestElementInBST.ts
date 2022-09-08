import { TreeNode } from "./TreeNode";

/**
 * Time complexity O(n)
 * Space complexity O(n)
 */

export function kthSmallest(root: TreeNode | null, k: number): number | void {
    const stack = [];
    let n = 0;
    let curr = root!;
    
    while (true) {
        if (curr) {
            stack.push(curr)
            curr = curr.left!;
        } else {
            if (stack.length === 0) break;
            curr = stack.pop()!;
            n += 1;
            if (n === k) return curr.val;
            curr = curr.right!;
        }
    }
}

