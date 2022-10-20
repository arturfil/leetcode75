import { TreeNode } from "./TreeNode";

/**
 * Time Complexity O(n)
 * 
 * Memory Complexity Olog(n) // height of the tree
 */
function maxPathSum(root: TreeNode | null): number {
    let max = {val: root!.val};
    
    dfs(root!, max);
    return max.val;
};

function dfs(node: TreeNode, max:{val:number}):number {
    if (!node) return 0;
    
    let left = dfs(node.left!, max); // this is what the return max(...) assigns to
    let right = dfs(node.right!, max);
    
    max.val = Math.max(left + right + node.val, max.val); // to asign to max
    return Math.max(0, left + node.val, right + node.val); // to asign to left node or right node | split/choose path
    
}