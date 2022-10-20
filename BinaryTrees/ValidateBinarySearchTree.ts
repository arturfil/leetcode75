import { TreeNode } from "./TreeNode";

export function isValidBST(root: TreeNode | null): boolean {
    return dfs(root, -Infinity, Infinity)
};

function dfs(node: TreeNode | null, left: number, right: number): boolean {
    if (node === null) return true;
    if (!(left < node.val && node.val < right )) return false;
    return dfs(node.left, left, node.val) && dfs(node.right, node.val, right);
}