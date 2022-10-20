/**
 * Time complexity Olog(n)
 * 
 * Memory complexity O(1), because we are not using aditional memory
 */

import { TreeNode } from "./TreeNode";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null | void {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (!left) return right;
    if (!right) return left;
    return root;
};


// test
/*
    let root = new TreeNode(3);
        let l1 = new TreeNode(5);
        let l2 = new TreeNode(6);
        let l3 = new TreeNode(2);
        let l4 = new TreeNode(7);
        let l5 = new TreeNode(4);

        root.left = l1;
        l1.left = l2;
        l1.right = l3;
        l3.left = l4;
        l3.right = l5;

        let r1 = new TreeNode(1);
        let r2 = new TreeNode(0);
        let r3 = new TreeNode(8);

        root.right = r1;
        r1.left = r2;
        r1.right = r3;

        lowestCommonAncestor(root, l3, r1);
        // selectRandomProblem()
*/