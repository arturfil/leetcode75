function maxProfit(prices: number[]): number {
    let max = 0, min = Infinity;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min)
            min = prices[i];
        else if (prices[i] - min > max)
            max = prices[i] - min;
    }
    return max;
};

function maxAlt(prices: number[]):number {
    let max = 0, min = Infinity;
    for(let num of prices) {
        min = Math.min(min, num);
        max = Math.max(max, num - min);
    }
    return max;
}

function maxAlt2(prices: number[]): number {
    let max = 0, min = Infinity;
    for(let p of prices) {
        if (p < min) min = p    
        else {
            max = Math.max(max, p - min);       
        }
    }
    return max;
};