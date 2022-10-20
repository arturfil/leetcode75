import { TreeNode } from "./TreeNode";

export function isSymmetric(root: TreeNode | null): boolean {
    return helper(root, root);
};

function helper(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    return node1.val === node2.val 
        && helper(node1.left, node2.right)
        && helper(node1.right, node2.left);
}