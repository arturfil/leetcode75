function ladderLength(beginWord: string, endWord: string, wordList: string[]): number { 
    let adjacentList = new Map();
    // generate adjacency list
    for(let word of wordList) {
        for(let i = 0; i < word.length; i++) {
            let newWord = word.substring(0, i) + "*" + word.substring(i+1);
            if(!adjacentList.has(newWord)) adjacentList.set(newWord, [word]);
            else adjacentList.get(newWord).push(word);
        }
    }    

    let queue:Array<[string, number]> = [[beginWord, 1]];
    let visited = {[beginWord]: true};

    while (queue.length !== 0) { // BFS
        const [word, level] = queue.shift()!;
        for(let i = 0; i < word.length; i++) {
            let newWord = word.substring(0, i) + "*" + word.substring(i+1);
            let adjacentWords = adjacentList.get(newWord);
            if (adjacentWords) {
                for(let item of adjacentWords) {
                    if (item === endWord) return level + 1;
                    if (!visited[item]) {
                        visited[item] = true;
                        queue.push([item, level+1]);
                    }
                }
            }
        }
    }
    return 0;
}

export default ladderLength;
/*// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: // 
function ladderLengthAlt(beginWord: string, endWord: string, wordList: string[]): number {
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
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: //*/


