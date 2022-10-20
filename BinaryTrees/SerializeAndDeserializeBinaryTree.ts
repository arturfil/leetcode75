import { TreeNode } from "./TreeNode";

/**
 * DFS
 * 
 * Time Complexity O(n).
 * 
 * Space Complexity O(n).
 */

export function serialize(root: TreeNode | null): string {
    const res:string[] = [];
    // dfs node
    function dfs(node: TreeNode) {
        if (!node) {
            res.push('null');
            return;
        }
        res.push(String(node.val));
        dfs(node.left!);
        dfs(node.right!);
    }
    dfs(root!);
    return res.join(",");
}

function deserialize(data: string): TreeNode | null {
    const vals = data.split(",");
    let i = 0;
    //
    function dfs() {
        if (vals[i] === 'null') {
            i += 1;
            return null;
        }
        const node = new TreeNode(parseInt(vals[i]));
        i += 1;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    return dfs();
}