
interface INode {
    children: Map<string, INode>
    isWord: boolean
}

function createNode(): INode {
    return { children: new Map(), isWord: false }
}

class WordDictionary {
    private trie: INode

    constructor() {
        this.trie = createNode();
    }

    addWord(word: string): void {
        let node = this.trie;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, createNode());
            }
            node = node.children.get(ch)!;
        }
        node.isWord = true;
    }

    search(word: string): boolean {
        let nodes = [this.trie!]!;
        for (const ch of word) {
            if (ch !== '.') {
                nodes = nodes.map(x => x.children.get(ch)).filter(x => !!x);
            } else {
                nodes = nodes.flatMap(x => Array.from(x.children.values()));
            }
        }
        return !!nodes.find(_ => _.isWord);
    }
}