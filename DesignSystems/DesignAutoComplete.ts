class AutocompleteSystem {
    head: TrieNodeA;
    word: string = ""

    constructor(sentences: string[], times: number[]) {
        this.head = new TrieNodeA();

        for (let i = 0; i < sentences.length; i++) {
            const sentance = sentences[i];
            this.insertWord(sentance, times[i]);
        }
    }

    insertWord(sentance: string, times?: number) {
        let tempHead = this.head;
        times = times || 1
        for (let char of sentance) {
            if (!(tempHead.children.has(char))) {
                tempHead.children.set(char, new TrieNodeA())
            }
            tempHead = tempHead.children.get(char)!;
        }
        tempHead.end = true
        tempHead.weight += times;
    }

    input(c: string): string[] {
        if (c === "#") {
            this.insertWord(this.word);
            this.word = ""
            return [];
        }

        this.word += c;
        let tempHead = this.head;
        // find the end position of sentences
        for (let char of this.word) {
            if (tempHead.children.has(char)) {
                tempHead = tempHead.children.get(char)!;
            } else
                return []
        }

        const words = this.findWord(tempHead, this.word).sort((a, b) => {
            let diff = b.weight - a.weight;
            if (diff === 0) diff = a.word.localeCompare(b.word)
            return diff;
        })

        return words.slice(0, 3).map(val => val.word)
    }

    findWord(node: TrieNodeA, currentWord: string): words[] {
        let words: words[] = [];
        if (node.end) words.push({ weight: node.weight, word: currentWord })

        node.children.forEach((val, key) => {
            words.push(...this.findWord(val, currentWord + key))
        })

        return words
    }
}

class TrieNodeA {
    children = new Map<string, TrieNodeA>();
    weight: number = 0;
    end: boolean = false;
}

interface words {
    weight: number;
    word: string;
}
