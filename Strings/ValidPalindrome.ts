function isPalindrome(s: string): boolean {
    s = s.replace(/[^0-9A-Z]+/gi, '').toLowerCase();
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) return false
    }
    return true;
};