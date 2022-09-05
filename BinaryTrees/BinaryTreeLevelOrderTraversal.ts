import { TreeNode } from "./TreeNode";

/**
 * Time complexity O(n)
 * 
 * Memory complexity O(n)
 */

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let res = [], queue = [root];
 
    while (queue.length) {
        const numNodes = queue.length;
        const subList = [];
        for (let i = 0; i < numNodes; i++) {
            const subtree = queue.shift();
            subList.push(subtree!.val);
            if (subtree?.left !== null) queue.push(subtree!.left);
            if (subtree?.right !== null) queue.push(subtree!.right);
        }
        res.push(subList);
    }
    return res;
}
