function numberOfBeams(bank: string[]): number {
    let total = 0, upper = 0;
    
    for(let i = 0; i < bank.length; i++) {
        let lower = 0;
        for(let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] == '1') lower += 1;
        }
        if (lower > 0) {
            total += upper * lower;
            upper = lower;
        }
    }
    
    return total;
};