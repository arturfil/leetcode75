function prisonAfterNDays(cells: number[], n: number): number[] {
    let dp=[], nextCells = [];
    let times = 1;
    
    while (times <= n) {
        
        for (let i = 0; i < cells.length; i++) {
            nextCells[i] = (cells[i-1] === cells[i+1]) ? 1 : 0;
        }
        
        cells = nextCells.slice();
        dp[times] = cells.join('');
        
        if (times > 1 && cells.join('') === dp[1]) {
            var remaining = n%(times-1);
            return dp[remaining===0? times-1 : remaining]
                .split('')
                .map(numStr => Number(numStr));
        }
    times++;
    }
    return cells;
};



