let dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
let n = dictionary.length;
let M = 3,
N = 3;

// Driver Code
let boggle = [
    ["G", "I", "Z"],
    ["U", "E", "K"],
    ["Q", "S", "E"],
];

// A given function to check if a given string
// is present in dictionary. The implementation is
// naive for simplicity. As per the question
// dictionary is given to us.
function isWord(str:string){        
// Linearly search all words
    for (let i = 0; i < n; i++) if (str == dictionary[i]) return true;
    return false;
}

// A recursive function to print all words present on boggle
function findWordsUtil(boggle:string[][], visited:boolean[][], i:number, j:number, str:string) {
    // Mark current cell as visited and
    // append current character to str
    visited[i][j] = true;
    str = str + boggle[i][j];

    // If str is present in dictionary,
    // then print it
    if (isWord(str)) document.write(str + "<br>");

    // Traverse 8 adjacent cells of boggle[i,j]
    for (let row = i - 1; row <= i + 1 && row < M; row++)
        for (let col = j - 1; col <= j + 1 && col < N; col++)
        if (row >= 0 && col >= 0 && !visited[row][col])
            findWordsUtil(boggle, visited, row, col, str);

    // Erase current character from string and
    // mark visited of current cell as false
    str = "" + str[str.length - 1];
    visited[i][j] = false;
}
 
// Prints all words present in dictionary.
function findWordsAlt(boggle:string[][]){
    // Mark all characters as not visited
    let visited = Array.from(Array(M), () => new Array(N).fill(0));

    // Initialize current string
    let str = "";

    // Consider every character and look for all words
    // starting with this character
    for (let i = 0; i < M; i++)
        for (let j = 0; j < N; j++) findWordsUtil(boggle, visited, i, j, str);
}
