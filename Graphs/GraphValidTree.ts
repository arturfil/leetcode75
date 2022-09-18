export function validTree(n: number, edges: number[][]): boolean {
    if (edges.length + 1 > n) return false;
    const graph:number[][] = Array.from(Array(n), () => []);
    for (const [from,  to] of edges) {
        graph[from].push(to);
        graph[to].push(from);
    }

    const visited = new Array(n).fill(false);
    dfs(0, graph, visited)
    return visited.every(node => node === true);
}

function dfs(node:number, graph: number[][], visited: boolean[]) {
    if (visited[node]) return;
    visited[node] = true;
    if (graph[node].length) {
        graph[node].forEach(neighbor => dfs(neighbor, graph, visited));
    }
}