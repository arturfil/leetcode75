function reverseBits(n: number): number {
    let res = 0, power = 31;
    while (n) {
        res += (n & 1) << power;
        n = n >>> 1;
        power -= 1;
    }
    return res >>> 0;
};