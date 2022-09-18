import { TreeNode } from "./TreeNode";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root === null) return false;
    if (equals(root, subRoot!)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function equals(node: TreeNode, subNode: TreeNode):boolean {
    if (!node && !subNode) return true;
    if (!node || !subNode) return false;
    if (node.val !== subNode.val) return false;
    return equals(node.left!, subNode.left!) && equals(node.right!, subNode.right!);
}