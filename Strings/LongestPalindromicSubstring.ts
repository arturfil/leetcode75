export function longestPalindrome(s: string): string {
    let current_s = "", max_s = "";
    for(let i = 0; i < s.length; i++) {
        let odd = subPalindrome(s, i, i);
        let even = subPalindrome(s, i, i+1);
        current_s = odd.length > even.length ? odd : even;
        max_s = max_s.length > current_s.length ? max_s : current_s;
    }
    return max_s;
};

function subPalindrome(s:string, l:number, r:number) {
    while(s[l] === s[r] && l >= 0 && r <= s.length) {
        l -= 1;
        r += 1;
    }
    return s.substring(l+1,r);
}