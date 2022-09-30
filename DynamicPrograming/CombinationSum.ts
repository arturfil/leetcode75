/**
 * 
 * Run time complexity is O(Nodes ^ [(Targets/Minimal Values) + 1] ) => O(N^(t/m + 1))
 * 
 * Space complexity is O(T/M)
 */

function combinationSum(candidates: number[], target: number): number[][] {
    let result:number[][] = [];
    dfs(target, [], 0, result, candidates);
    return result;
}

function dfs(remain:number, sol:number[], index:number, result: number[][], candidates:number[]) {
    if (remain === 0) result.push([...sol]);
    if (remain < 0) return;
    for (let i = index; i < candidates.length; i++) {
        sol.push(candidates[i]);
        dfs(remain - candidates[i], sol, i, result, candidates);
        sol.pop();
    }
}

export default combinationSum;