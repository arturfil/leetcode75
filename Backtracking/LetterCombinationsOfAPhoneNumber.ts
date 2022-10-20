const map = new Map([
    [2, "abc"],
    [3, "def"],
    [4, "ghi"],
    [5, "jkl"],
    [6, "mno"],
    [7, "pqrs"],
    [8, "tuv"],
    [9, "wxyz"]
])

function letterCombinations(digits: string):string[] {
    if (digits === null || digits.length === 0) return [];
    const combinations:string[] = [];
    backTracking(0, '', digits, combinations);
    return combinations;
}

function backTracking(i:number, s:string, digits:string, combinations:string[]) {
    if (i == digits.length) {
        combinations.push(s);
        return;
    }
    for (const c of map.get(Number(digits[i]))!) {
        backTracking(i + 1, s + c, digits, combinations);
    }
}

export default letterCombinations;