class Node {
    val: number
    neighbors: Node[]
    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

export function cloneGraph(node: Node | null): Node | null {
    const map = new Map();
    return dfs(node, map);
}

function dfs(node: Node | null, map: Map<Node, Node>) {
    if (!node) return node;
    if (map.has(node)) return map.get(node)!;
    const clone = new Node(node.val);
    map.set(node!, clone)!;
    for (let nei of node.neighbors) {
        clone.neighbors.push(dfs(nei, map)!)
    }
    return clone;
}