export function lengthOfLongestSubstring(s: string): number {
    const map = new Map();
    let start = 0, max = 0;
    for(let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= start) {
            start = map.get(s[i]) + 1
        } 
        max = Math.max(max , i  + 1 - start)
        map.set(s[i], i);
    }
    return max;
}

/*
let tests = [
    "abcabcbb",
    "bbbbb",
    "pwwkew",
    " "
]

tests.forEach(test => console.log(lengthOfLongestSubstring(test)));
*/