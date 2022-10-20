function wordBreak(s: string, wordDict: string[]): string[] {
    const memo = new Map<string, string[]>();
    return dfs(s, memo, wordDict);
}

function dfs(str: string, map: Map<string, string[]>, wordDict: string[]): string[] {
    if (map.has(str)) return map.get(str)!;
    if (!str.length) return [];
    const result = [];

    for(let w of wordDict) {
        if (str.startsWith(w)) {
            const next = str.slice(w.length);
            const paths = dfs(next, map, wordDict);
            if (!paths?.length && !next.length) result.push(w);
            result.push(...paths.map(rest => w + ' ' + rest));
        }
    }
    map.set(str, result);
    return result;
}

export default wordBreak;