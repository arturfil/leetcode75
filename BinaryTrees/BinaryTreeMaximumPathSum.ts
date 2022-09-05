import { TreeNode } from "./TreeNode";

/**
 * Time Complexity O(n)
 * 
 * Memory Complexity Olog(n) // height of the tree
 */
function maxPathSum(root: TreeNode | null): number {
    if (!root) return 0;
    const res = [root.val];
    dfs(root, res);
    return res[0];
}

function dfs(root: TreeNode, res: number[]): number {
    if (!root) return 0;

    let leftMax = dfs(root.left!, res);
    let rightMax = dfs(root.right!, res);

    leftMax = Math.max(leftMax!, 0);
    rightMax = Math.max(rightMax!, 0);

    res[0] = Math.max(res[0], root.val + leftMax + rightMax);
    return root.val + Math.max(leftMax, rightMax);
}