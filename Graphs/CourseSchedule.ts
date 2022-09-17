export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const visited = new Set<number>();
    const current = new Set<number>();
    const preReqs = new Array<number[]>(numCourses).fill([]).map(_ => new Array().fill([]));
    // you are pushing the courses IN the index of the prereq.
    for (let [c,p] of prerequisites) {
        preReqs[c].push(p);
    }
    // you will run the loop for each coure num.
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i, current, visited, preReqs)) return false;
    }
    return true;
}

function dfs(val: number,  current: Set<number>, visited: Set<number>, preReqs:number[][]) {
    if (visited.has(val)) return true; // if visited is there return true, means the prereq checks
    if (current.has(val)) return false; // if it's in current means at some point the dfs is false
    current.add(val); // adding val to current
    for (let crs of preReqs[val]) {
        // return false from a nested dfs call
        if (!dfs(crs, current, visited, preReqs)) return false;
    }
    // delete from current
    current.delete(val);
    // add to visited
    visited.add(val);
    return true;
}

/**
 * canFinish(5, [[0,1], [0,2], [1,3], [1, 4], [2,3]]);
 */