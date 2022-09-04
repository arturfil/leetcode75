export function minMeetingRooms(intervals: number[][]): number {
    let starts = intervals.map(a => a[0]).sort((a,b) => a - b);
    let ends = intervals.map(a => a[1]).sort((a,b) => a - b);
    let rooms = 0, end = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[end]) {
            rooms += 1;
        } else {
            end += 1;
        }
    }
    return rooms;
};