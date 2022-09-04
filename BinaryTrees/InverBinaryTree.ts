import { TreeNode } from "./TreeNode";

function invertTree(root: TreeNode): TreeNode | null {
    if (root === null) return null;
    
    let right = invertTree(root.right!);
    let left = invertTree(root.left!);
    root.left = right;
    root.right = left;

    return root;
}