import { TreeNode } from "./TreeNode";

export function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    let left = 1 + maxDepth(root.left);
    let right = 1 + maxDepth(root.right);
    return Math.max(left, right);
}
