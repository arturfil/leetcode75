import { validTree } from "./Graphs/GraphValidTree";
import { selectRandomProblem } from "./problems";
import { groupOfAnagrams } from "./Strings/GroupOfAnagrams";
import { characterReplacement } from "./Strings/LongestRepeatingCharacterReplacement";
import { lengthOfLongestSubstring } from "./Strings/LongestSubstringNoRepeating";

class Main {
    
    main(args?: string[]) {
        selectRandomProblem();        
    }
}

let app = new Main();
app.main();
