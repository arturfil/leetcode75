import { validTree } from "./Graphs/GraphValidTree";

class Main {
    
    main(args?: string[]) {
        validTree(5, [[0,1],[0,2],[0,3],[1,4]]);
    }
}

let app = new Main();
app.main();

/*
    [0,0,0],
    [1,0,0],
    [1,0,0]

*/