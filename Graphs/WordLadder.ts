function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const set = new Set(wordList);
    let step = 1;
    let queue = [beginWord];

    while (queue.length) {
        const next = [];
        for (let w of queue) {
            if (w === endWord) return step;

            for(let i = 0; i < w.length; i++) {
                for(let j = 0; j < 26; j++) {
                    const w2 = w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1);
                    
                    if (set.has(w2)) {
                        next.push(w2);
                        set.delete(w2);
                    }
                }
            }
        }
        queue = next;
        step += 1;
    }
    return 0;
};