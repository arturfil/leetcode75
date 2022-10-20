function strStr(haystack: string, needle: string): number {
    for(let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.substring(i, i + needle.length) === needle){
                return i; // start index;
            }
        }
    }
    return -1;
};