/**
 * Time complexity Olog(n)
 * 
 * Memory complexity O(1), because we are not using aditional memory
 */

import { TreeNode } from "./TreeNode";

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null | void {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (!left) return right;
    if (!right) return left;
    return root;
};