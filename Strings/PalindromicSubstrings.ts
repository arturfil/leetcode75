export function countSubstrings(s: string): number {
    let sum = 0, odd = 0, even = 0;
    for (let i = 0; i < s.length; i++) {
        odd = subPalindrome(s, i, i);
        even = subPalindrome(s, i, i+1);
        sum += (odd + even);
    }
    return sum;
};

function subPalindrome(s:string, l: number, r:number) {
    let count = 0;
    while (s[l] === s[r] && l >= 0 && r <= s.length) {
        l -= 1;
        r += 1;
        count += 1
    }
    return count;
}