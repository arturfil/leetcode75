import { findMid } from "./Arrays/FindMinimumInRotatedSortedArray";
import { kthSmallest } from "./BinaryTrees/KthSmallestElementInBST";
import { serialize } from "./BinaryTrees/SerializeAndDeserializeBinaryTree";
import { TreeNode } from "./BinaryTrees/TreeNode";
import {combinationSum} from "./DynamicPrograming/CombinationSum";
import { rob } from "./DynamicPrograming/HouseRobber";
import { uniquePaths } from "./DynamicPrograming/UniquePaths";
import { validTree } from "./Graphs/GraphValidTree";
import { pacificAtlantic } from "./Graphs/PacificAtlanticWaterFlow";


class Main {
    
    main(args?: string[]) {
        findMid([5,6,7,8,9,10,11,12,13,1,2,3,4]);
    }
}

let app = new Main();
app.main();
