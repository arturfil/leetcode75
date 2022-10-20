import { TreeNode } from "./TreeNode";

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let res = [], queue = [root];
    let height = 0;
    
    while (queue.length > 0) {
        const qLen = queue.length;
        const list = [];
        for(let i = 0; i < qLen; i++) {
            const node = queue.shift();
            if (height % 2 == 0) list.push(node!.val);
            else list.unshift(node!.val);
            if (node!.left) queue.push(node!.left);
            if (node!.right) queue.push(node!.right);
        }
        height += 1;
        res.push(list);
    }
    return res;
};