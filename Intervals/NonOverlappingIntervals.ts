export function eraseOverlapIntervals(intervals: number[][]): number {  
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0], remove = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prev[1]) remove++;
        else prev = intervals[i];
    }
    return remove;
}
