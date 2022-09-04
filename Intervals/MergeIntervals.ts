export function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((a,b) => a[0] - b[0])
    let res = [intervals[0]]
    for (let interval of intervals) {
        let last = res[res.length-1]
        if (interval[0] >= last[1]) {
            last[1] = Math.max(last[1], interval[1])
        } else {
            res.push(interval)
        }
    }
    return res;
}

/*
    let intervals = [[1,3],[2,6],[8,10],[15,18]];
    merge(intervals);
*/