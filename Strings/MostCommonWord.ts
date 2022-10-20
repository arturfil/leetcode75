function mostCommonWord(paragraph: string, banned: string[]): string {
    const map = new Map();
    const set = new Set(banned);
    let stringArr = paragraph.toLowerCase().split(/\W+/);
    let max:any[] = []
        
    for(let word of stringArr) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1)
        } else if (!set.has(word) && word !== '') {
            map.set(word, 1);
        }
    }
    
    for(let [key, val] of map) {
        if (max.length === 0) max = [key, val];
        max = map.get(key) > max[1] ? [key,val] : max;
    }
    return max[0];
};