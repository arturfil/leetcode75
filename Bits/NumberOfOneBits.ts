export function hammingWeight(n: number): number {
    let counter = 0;
    while (n != 0) {
        n &= n - 1;
        counter++;
    }
    return counter;
}