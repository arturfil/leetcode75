function climbStairs(n:number): number {
    let steps = [0,1,2];
    if (n <= 2) return n;
    for (let i = 3; i <= n; i++) {
        steps[i] = steps[i-1] + steps[i-2];
    }
    return steps[n];
}
