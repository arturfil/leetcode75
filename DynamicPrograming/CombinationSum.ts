/**
 * 
 * Run time complexity is O(Nodes ^ [(Targets/Minimal Values) + 1] ) => O(N^(t/m + 1))
 * 
 * Space complexity is O(T/M)
 */

export function combinationSum(candidates: number[], target: number): number[][] {
    let res:number[][] = [];
    dfs(target, [], 0, res, candidates);
    return res;
}

function dfs(remain:number, sol:number[], index:number, res: number[][], candidates:number[]) {
    if (remain < 0) return;
    if (remain === 0) res.push(sol);
    for (let i = index; i < candidates.length; i++) {
        let new_sol = [...sol, candidates[i]];
        dfs((remain - candidates[i]), new_sol, i, res, candidates);
    }
}