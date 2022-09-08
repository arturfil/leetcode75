/**
 * Time complexity Olog(n)
 * 
 * Memory complexity O(1), because we are not using aditional memory
 */

import { TreeNode } from "./TreeNode";

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null | void {
    while (root !== null) {
        if (root.val < p!.val && root!.val < q!.val) {
            root = root.right;
        } else if (root!.val > p!.val && root!.val > q!.val) {
            root = root.left;
        } else {
            return root;
        }
    }
};