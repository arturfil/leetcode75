export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    let count = new Array(26).fill(0);
    for (let c of s) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        count[i] += 1 // could be empty the array
    }
    for (let c of t) {
        let j = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!count[j]) return false; // if that index doesn't exist -> false
        count[j] -= 1; // substract 1
    }
    return true;
}