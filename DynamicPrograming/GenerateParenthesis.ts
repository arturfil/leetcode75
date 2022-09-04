export function generateParenthesis(n: number):string[] {
    const dp:string[][] = new Array(n + 1).fill([])
    dp[1] = ["()"];
    // ()
    // ()(), (()), 
    // ()()(), (()()), (())(), ()(()), ((())),
    for(let i = 2; i <= n; i++) {
        for (let set of dp[i-1]) {
            dp[i].push(set + "()");
            dp[i].push(`(${set})`);
        }
    }
    return dp[n];   
}

function generateParenthesisAlt(n: number): string[] {
    const combinations: string[] = [];
    return backtrackGenerateParenthesis(n, n, '', combinations);
}

function backtrackGenerateParenthesis(open: number, closed: number, op: string, combinations: string[]) {
    if (open == 0 && closed == 0) {
        combinations.push(op);
        return combinations;
    }

    if (open > 0) {
        let op1: string = op;
        op1 += '(';
        backtrackGenerateParenthesis(open - 1, closed, op1, combinations);
    }

    if (closed > open) {
        let op2: string = op;
        op2 += ')';
        backtrackGenerateParenthesis(open, closed - 1, op2, combinations)
    }
    return combinations
}