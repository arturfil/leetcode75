export function combinationSum(candidates: number[], target: number): number[][] {
    let results:number[][] = [];

    function dfs(remain:number, solution:number[], index:number) {
        if (remain === 0) results.push(solution);
        if (remain < 0) return;
        for (let i = index; i < candidates.length; i++) {
            let new_sol = [...solution, candidates[i]];
            dfs((remain - candidates[i]), new_sol, i);
        }
    }

    dfs(target, [], 0);
    return results;
}