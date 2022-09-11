export function hammingWeight(n: number): number {
    let counter = 0;
    // you want to and n until you have 0.
    // that way you get rif of all '1's
    while (n !== 0) {
        n = n & (n - 1);
        counter++;
    }
    return counter;
}