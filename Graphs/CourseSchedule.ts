export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const visited = new Set<number>();
    const current = new Set<number>();
    const preReqs = new Array<number[]>(numCourses);
    for (let i = 0; i < preReqs.length; i++) preReqs[i] = []; // you do this to avoid same reference in all array

    for (let [c,p] of prerequisites) {
        preReqs[p].push(c);
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i, current, visited, preReqs)) return false;
    }
    return true;
}

function dfs(val: number,  current: Set<number>, visited: Set<number>, preReqs:number[][]) {
    if (visited.has(val)) return true;
    if (current.has(val)) return false;
    current.add(val);
    for (let crs of preReqs[val]) {
        if (!dfs(crs, current, visited, preReqs)) return false;
    }
    current.delete(val);
    visited.add(val);
    return true;
}

/**
 * canFinish(5, [[0,1], [0,2], [1,3], [1, 4], [2,3]]);
 */