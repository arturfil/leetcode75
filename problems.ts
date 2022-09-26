const problems = [
    {name: "Two Sum", done: 0},
    {name: "Best Time to Buy and Sell Stock", done: 0},
    {name: "Contains Duplicate", done: 0},
    {name: "Product of Array Except Self", done: 1},
    {name: "Maximum Subarray", done: 0},
    {name: "Maximum Product Subarray", done: 0},
    {name: "Find Minimum in Rotated Sorted Array", done: 0},
    {name: "Search in Rotated Sorted Array", done: 0},
    {name: "3 Sum", done: 0},
    {name: "Container With Most Water", done: 0},
    {name: "Sum of Two Integers", done: 1},
    {name: "Number of 1 Bits", done: 0},
    {name: "Counting Bits", done: 1},
    {name: "Missing Number", done: 0},
    {name: "Reverse Bits", done: 0},
    {name: "Climbing Stairs", done: 0},
    {name: "Coin Change", done: 0},
    {name: "Longest Increasing Subsequence", done: 0},
    {name: "Longest Common Subsequence", done: 0},
    {name: "Word Break Problem", done: 0},
    {name: "Combination Sum", done: 1},
    {name: "House Robber", done: 0},
    {name: "House Robber II", done: 0},
    {name: "Decode Ways", done: 0},
    {name: "Unique Paths", done: 0},
    {name: "Jump Game", done: 0},
    {name: "Clone Graph", done: 0},
    {name: "Course Schedule", done: 0},
    {name: "Pacific Atlantic Water Flow", done: 0},
    {name: "Number of Islands", done: 0},
    {name: "Longest Consecutive Sequence", done: 0},
    {name: "Alien Dictionary (Leetcode Premium)", done: 0},
    {name: "Graph Valid Tree (Leetcode Premium)", done: 0},
    {name: "Number of Connected Components in an Undirected Graph (Leetcode Premium)", done: 0},
    {name: "Insert Interval", done: 1},
    {name: "Merge Intervals", done: 0},
    {name: "Non-overlapping Intervals", done: 0},
    {name: "Meeting Rooms (Leetcode Premium)", done: 0},
    {name: "Meeting Rooms II (Leetcode Premium)", done: 0},
    {name: "Reverse a Linked List", done: 0},
    {name: "Detect Cycle in a Linked List", done: 1},
    {name: "Merge Two Sorted Lists", done: 0},
    {name: "Merge K Sorted Lists", done: 0},
    {name: "Remove Nth Node From End Of List", done: 1},
    {name: "Reorder List", done: 0},
    {name: "Set Matrix Zeroes", done: 0},
    {name: "Spiral Matrix", done: 0},
    {name: "Rotate Image", done: 0},
    {name: "Word Search", done: 0},
    {name: "Longest Substring Without Repeating Characters", done: 0},
    {name: "Longest Repeating Character Replacement", done: 0},
    {name: "Minimum Window Substring", done: 0},
    {name: "Valid Anagram", done: 1},
    {name: "Group Anagrams", done: 0},
    {name: "Valid Parentheses", done: 0},
    {name: "Valid Palindrome", done: 0},
    {name: "Longest Palindromic Substring", done: 0},
    {name: "Palindromic Substrings", done: 0},
    {name: "Encode and Decode Strings (Leetcode Premium)", done: 0},
    {name: "Maximum Depth of Binary Tree", done: 0},
    {name: "Same Tree", done: 0},
    {name: "Invert/Flip Binary Tree", done: 0},
    {name: "Binary Tree Maximum Path Sum", done: 0},
    {name: "Binary Tree Level Order Traversal", done: 0},
    {name: "Serialize and Deserialize Binary Tree", done: 0},
    {name: "Subtree of Another Tree", done: 0},
    {name: "Construct Binary Tree from Preorder and Inorder Traversal", done: 0},
    {name: "Validate Binary Search Tree", done: 0},
    {name: "Kth Smallest Element in a BST", done: 0},
    {name: "Lowest Common Ancestor of BST", done: 0},
    {name: "Implement Trie (Prefix Tree)", done: 0},
    {name: "Add and Search Word", done: 0},
    {name: "Word Search II", done: 0},
    {name: "Top K Frequent Elements", done: 0},
    {name: "Find Median from Data Stream", done: 0},
    {name: "Minimum Number of Taps to Open to Water a Garden", done: 0}
]

const createRandomIndex = (upperValue:number, lowerValue: number):number => {
    let randomIndex = Math.floor(Math.random() * (upperValue - lowerValue) + 1);
    return randomIndex;
}

export const selectRandomProblem = ():void => {
    let count = problems.filter(x => x.done === 1);
    let notDoneYet = problems.filter(x => x.done === 0);
    let index = createRandomIndex(notDoneYet.length-1, 0);
    console.log("\n--------- PROBLEM! ---------\n");
    console.log(notDoneYet[index].name);
    console.log(`\n${count.length} Problems done out of 76`);
    console.log("\n--------- LETS GO! ---------\n");
}