export function longestConsecutive(nums: number[]): number {
    let len = 0;
    const set = new Set();
    for(let num of nums) {
        set.add(num);
    }

    for(let num of nums) {
        let current = 1;
        if (!set.has(num - 1)) { // start of sequence
            while (set.has(num + 1)) {
                current += 1;
                num += 1;
            }
        }
        len = Math.max(len, current);
    }

    return len
}
