import { TreeNode } from "./TreeNode";

/**
 * Time complexity O(n)
 * Space complexity O(n)
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    if (!root) return -1;    
    const inorder: number[] = [];
    dfs(root, inorder);
    return inorder[k - 1];
};

function dfs(node: TreeNode, inorder:number[]) {
    inorder.push(node.val);
    if (node.left) dfs(node.left, inorder);
    if (node.right) dfs(node.right, inorder);
    return node;
};

// ------------------------------------------- ITERATIVE ------------------------------------------- //

// export function kthSmallest(root: TreeNode | null, k: number): number | void {
//     // traverse the binary tree in order! put it in an array and return the kth index value;
//     const stack = [];
//     let n = 0;
//     let current = root;
    
//     while (true) {
//         if (current) {
//             stack.push(current)
//             current = current.left;
//         } else {
//             current = stack.pop()!;
//             n += 1;
//             if (n === k) return current.val;
//             current = current.right;
//         }
//     }
// }

