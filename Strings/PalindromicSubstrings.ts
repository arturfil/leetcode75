export function countSubstrings(s: string):number {
    let odd = 0, even = 0, max = 0;
    for (let i = 0; i < s.length; i++) {
        odd = isPalindrome(s, i, i);
        even = isPalindrome(s, i, i+1);
        let current = Math.max(odd, even);
        max += current;
    }
    return max;
}

function isPalindrome(s:string, left:number, right:number) {
    let count = 0;
    while (s[left] === s[right] && left >= 0 && right <= s.length) {
            count++;
            right++;
            left--;
    }
    return count;
}