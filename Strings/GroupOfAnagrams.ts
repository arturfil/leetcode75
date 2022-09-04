export function groupOfAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
  
    for (let word of strs) {
        const count = new Array(26).fill(0);
  
        for (const c of word) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index]++;
        }
  
        const signature = count.toString();
        if (!map.has(signature)) map.set(signature, []);
  
        map.get(signature)?.push(word);
    }
    return Array.from(map.values());
}
