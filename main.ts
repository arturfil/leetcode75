import { uniquePaths, uniquePathsDP } from "./DynamicPrograming/UniquePaths";

class Main {
    
    main(args?: string[]) {
        uniquePathsDP(3,6); // 21
        /*
            [S,6,5,4,3,2],
            [6,5,4,3,2,1],
            [5,4,3,2,1,G]
        */
    }
}

let app = new Main();
app.main();
