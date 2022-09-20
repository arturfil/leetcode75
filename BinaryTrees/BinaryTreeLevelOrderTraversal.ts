import { TreeNode } from "./TreeNode";

/**
 * Time complexity O(n)
 * 
 * Memory complexity O(n)
 */

// This is a BFS
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let res = [], queue = [root];
 
    while (queue.length) {
        const qLen = queue.length // we do this to keep this len constant
        // although queue.lenght could change;
        const subList = [];
        for (let i = 0; i < qLen; i++) {
            const subNode = queue.shift();
            subList.push(subNode!.val);
            if (subNode?.left !== null) queue.push(subNode!.left);
            if (subNode?.right !== null) queue.push(subNode!.right);
        }
        res.push(subList);
    }
    return res;
}
