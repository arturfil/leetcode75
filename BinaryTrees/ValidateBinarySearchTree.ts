import { TreeNode } from "./TreeNode";

export function isValidBST(root: TreeNode | null):boolean {
    return dfs(root, -Infinity, Infinity);
}

function dfs(node: TreeNode | null, left: number, right: number): boolean {
    if (!node) return true;
    if (!(left > node?.val && node?.val > right)) return false; // node.val < left_boundary && node.val 
    return dfs(node.left, left, node.val) && dfs(node.right, node.val, right); // traverse till null
}