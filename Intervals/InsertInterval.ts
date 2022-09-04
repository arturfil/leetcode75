export function insert(intervals: number[][], newInterval: number[]) {
    const new_ints:number[][] = [];
    
    for (let [i, interval] of intervals.entries()) {
    // for (let i = 0; i < intervals.length; i++) {
    // let interval = intervals[i];
        // does it go before
        if (newInterval[1] < interval[0]) {
            new_ints.push(newInterval, ...intervals.slice(i));
            return new_ints;
        // does it go after?
        } else if (newInterval[0] > interval[1]) {
            new_ints.push(interval);
        // it's merging therefore merge and repeat process
        } else {
            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        }
    }
    
    new_ints.push(newInterval);
    return new_ints;
}