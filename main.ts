import {combinationSum} from "./DynamicPrograming/CombinationSum";
import { rob } from "./DynamicPrograming/HouseRobber";
import { uniquePaths } from "./DynamicPrograming/UniquePaths";
import { validTree } from "./Graphs/GraphValidTree";
import { pacificAtlantic } from "./Graphs/PacificAtlanticWaterFlow";


class Main {
    
    main(args?: string[]) {
        validTree(5, [[0,1],[0,2],[0,3],[1,4]])
    }
}

let app = new Main();
app.main();
