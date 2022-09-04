export function longestPalindrome(s: string): string {
    let max = "", current = "";
    for (let i = 0; i < s.length; i++) { 
        let odd =  getSubStr(s, i, i);
        let even = getSubStr(s, i, i+1);
        current = odd.length > even.length ? odd : even;
        max = max.length > current.length ? max : current;
    }
    return max;
}

function getSubStr(s: string, l:number, r:number):string {
    while (s[l] === s[r] && l >= 0 && r <= s.length) {
        l -= 1;
        r += 1;
    }
    return s.substring(l+1, r);
}