import { combinationSum } from "./DynamicPrograming/CombinationSum";
import { validTree } from "./Graphs/GraphValidTree";
import { ListNode } from "./LinkedLists/ListNode";
import { removeNthFromEnd } from "./LinkedLists/RemoveNFromEnd";
import { selectRandomProblem } from "./problems";
import { groupOfAnagrams } from "./Strings/GroupOfAnagrams";
import { characterReplacement } from "./Strings/LongestRepeatingCharacterReplacement";
import { lengthOfLongestSubstring } from "./Strings/LongestSubstringNoRepeating";

class Main {
    
    main(args?: string[]) {
        selectRandomProblem();        
        // combinationSum([2,3,5], 8);
    }
}

let app = new Main();
app.main();
