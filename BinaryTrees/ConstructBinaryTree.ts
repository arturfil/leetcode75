import { TreeNode } from "./TreeNode";

export function  buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!inorder.length || !preorder.length) return null;
    let root = new TreeNode(preorder[0]);
    let middle = inorder.indexOf(root.val);
    root.left = buildTree(preorder.slice(1, middle + 1), inorder.slice(0, middle + 1));
    root.right = buildTree(preorder.slice(middle + 1), inorder.slice(middle + 1));
    return root;
}