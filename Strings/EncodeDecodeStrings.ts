export function encode(strs: string[]): string {
    let res = "";
	for (let s of strs) {
        res += `${s.length}#${s}`;
    }
    return res;
};

function decode(s: string): string[] {
    let i = 0, res = [];
	while (i < s.length) {
        let j = i;
        while  (s[j] !== "#") {
            j++;
        }
        const len = Number(s.slice(i, j));
        res.push(s.slice(++j, j + len));
        i = j + len;
    }
    return res;
};