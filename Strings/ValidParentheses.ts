export function isValid(s: string): boolean {
    const stack:string[]  =[];
    const map = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"]
    ]);
    for (let char of s) {
        if (char === stack[stack.length - 1]) stack.pop();
        else stack.push(map.get(char)!);
    }
    return stack.length === 0;
}