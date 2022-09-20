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


// LEFT ->  ROOT  -> RIGHT = In Order   | [4,2,5,1,3,6,7] 
// ROOT ->  LEFT  -> RIGHT = Pre Order  | [1,2,4,5,3,6,7] 
// LEFT ->  RIGHT -> ROOT  = Post Order | [4,5,2,6,7,3,1]