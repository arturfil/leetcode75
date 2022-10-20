function partitionLabels(s: string): number[] {    
    const last = new Map<string, number>();
    let res: number[] = [];
    let max = 0, size = 0;
    
    for (let i = 0; i < s.length; i++) {
        last.set(s[i], i);
    }

    for (let i = 0; i < s.length; i++) {
        max = Math.max(max, last.get(s[i])!);
        size += 1;
        if (max == i) {
            res.push(size);
            size = 0;
        }
    }

    return res;
};