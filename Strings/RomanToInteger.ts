function romanToInt(s: string): number {
    const map = new Map([
        ["I", 1],["V", 5],["X", 10],["L", 50],
        ["C", 100],["D", 500],["M", 1000]
    ])

    let num = map.get(s[s.length-1])!; // added  10 already
    
    for(let i = 0; i < s.length-1; i++) {
        let current = map.get(s[i])!, next = map.get(s[i+1])!
        if (current < next) num -= current;
        else num += current;
    }
    return num;
};