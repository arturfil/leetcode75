function myAtoi(s: string): number {
    s = s.trimStart();   
    const MIN = -Math.pow(2, 31);
    const MAX = Math.pow(2, 31) - 1;
    let result = '';
    let sign = 1, idx = 0;
    
    if (s[idx] === '-') sign = -1; // just for negative symbol
    if (s[idx] === '-' || s[idx] === "+") idx++; // if either symbol
    
    while (idx < s.length) {
        const char = s[idx];

        if (!('0' <= char && char <= '9')) break;
        result += char;
        idx++;
    }

    const lastResult = sign * Number(result);
    return lastResult < MIN ? MIN : lastResult > MAX ? MAX : lastResult;
}