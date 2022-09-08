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
        let root = new TreeNode(1);
        let l_node = new TreeNode(2);

        let r_node = new TreeNode(3);
        let r_node2 = new TreeNode(4);
        let r_node3 = new TreeNode(5);

        root.left = l_node;
        root.right = r_node;
        r_node.left = r_node2;
        r_node.right = r_node3;

        kthSmallest(root, 3);
    }
}

let app = new Main();
app.main();
