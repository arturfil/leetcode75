function reverse(x: number): number {
    let reversed = 0;
    let MIN_32_VALUE = Math.pow(-2, 31);
    let MAX_32_VALUE = Math.pow(2, 31);
    
    while (x !== 0) {
        let digit = x % 10;
        x =  x > 0 ? Math.floor(x/10) : Math.ceil(x/10);
        reversed = (reversed * 10) + digit
    }
    
    return reversed <= MAX_32_VALUE && reversed >= MIN_32_VALUE ? 
        reversed : 0;
};