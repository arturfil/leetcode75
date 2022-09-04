export function getSum(a:number, b:number):number {
    let carry 
    while ((a & b) !== 0) {
        carry = (a & b) << 1;
        a = a ^ b; // XOR
        b = carry; // AND
    }
    return a ^ b;
}