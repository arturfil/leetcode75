export class Node {
    val: number
    neighbors: Node[]
    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

/*
    Time COmplexity O(edges + vertices)
*/

export function cloneGraph(node: Node | null): Node | null {
    const map = new Map();
    return dfs(node, map);
}

function dfs(node: Node | null, map: Map<Node, Node>) {
    if (!node) return node; // if null return null
    if (map.has(node)) return map.get(node)!; // if null already in map return node
    
    const clone = new Node(node.val); // clone that null if not in map
    map.set(node!, clone)!; // set it in map
    
    for (let nb of node.neighbors) {
        clone.neighbors.push(dfs(nb, map)!); // for each neighbor the original has clone to new CLone
    } 
    return clone;
}