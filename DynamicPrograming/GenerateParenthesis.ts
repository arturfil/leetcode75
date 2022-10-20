function generateParenthesis(n: number): string[] {
    let res:string[] = [];
    dfs("", 0, 0, n, res);
    return res;
}

function dfs(str: string, open:number, close:number, max:number, res:string[]) {
    if (close === max) res.push(str);
    if (open < max) dfs(str + "(", open + 1, close, max, res);
    if (close < open) dfs(str + ")", open, close + 1, max, res);
}