export function combinationSum(candidates: number[], target: number): number[][] {
    let results:number[][] = [];
    backTracking(target, [], 0, results, candidates);
    return results;
}

function backTracking(remain:number, solution:number[], index: number, results: number[][], candidates: number[]) {
    if (remain === 0) results.push(solution);
    if (remain < 0) return;
    
    for (let i = index; i < candidates.length; i++) {
        let newSol = [...solution, candidates[i]];
        backTracking((remain - candidates[i]), newSol, i, results, candidates);
    }
}
                               
