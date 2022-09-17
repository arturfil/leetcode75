/**
 * Time complexity w * m * n * 4
 */ 
 class STrieNode {
    links: Map<string, STrieNode>;
    word: string | null;
    end: boolean;

    constructor () {
        this.links = new Map();
        this.word = null;
        this.end = false;
    }
}

function findWords(board: string[][], words: string[]): string[] {

    let answer:any[] = [];
    let row = board.length;
    let col = board[0].length;
    let root = new STrieNode();
    
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let cur = root;
        for (let j = 0; j < word.length; j++) {
            let ch = word[j];
            if (!cur.links.has(ch)) {
                let newNode = new STrieNode();
                cur.links.set(ch, newNode);
                cur = newNode;
            } else {
                cur = cur.links.get(ch)!;
            }
        }
        cur.word = word;
        cur.end = true;
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (root.links.has(board[i][j])) {
                backTrack(root, i, j );
            }
        }
    }
    
    return answer;    
    
    function backTrack (node: STrieNode, i: number, j: number): void {                
        let letter = board[i][j];
        let curNode = node.links.get(letter)!;
        
        if (curNode.end) {
            answer.push(curNode.word);
            curNode.end = false;
        }
        
        let ch = board[i][j];
        board[i][j] = "#";
        
        if (i+1 < row && curNode.links.has(board[i+1][j])) {
            backTrack(curNode, i+1, j);
        }
        
        if (i-1 >= 0 && curNode.links.has(board[i-1][j])) {
            backTrack(curNode, i-1, j);
        }
    
        if (j+1 < col && curNode.links.has(board[i][j+1])) {
            backTrack(curNode, i, j+1);
        }
    
        if (j-1 >= 0 && curNode.links.has(board[i][j-1])) {
            backTrack(curNode, i, j-1);
        }
    
        board[i][j] = ch;
    
        if (curNode.links.size === 0) {
            node.links.delete(letter);
        }
    }

};