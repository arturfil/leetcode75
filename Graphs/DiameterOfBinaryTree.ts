import { TreeNode } from "../BinaryTrees/TreeNode";

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;
    let max = {val: 0}
    dfs(root, max)
    return max.val;
};

function dfs(node: TreeNode | null, max:{val:number}): number {
    if (!node) return 0;
    let left = dfs(node.left, max);
    let right = dfs(node.right, max);
    max.val = Math.max(max.val, left + right);
    return 1 + Math.max(left, right);
}