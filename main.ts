import search from "./Arrays/SearchInRotatedSortedArray";
import { TicTacToe } from "./DesignSystems/DesignTicTacToe";
import flatten from "./HashMaps/FlattendDictionary";
import { selectRandomProblem } from "./problems";

class Main {

    main(args?: string[]) {
        // selectRandomProblem();
        let tic = new TicTacToe(3);
        tic.move(0, 0, 1);
        tic.move(0, 2, 2);
        tic.move(2, 2, 1);
        tic.move(1, 2, 2);
        tic.move(1, 1, 1);
        tic.move(1, 0, 2);
        // tic.move(2, 1, 1);
        tic.move(0, 1, 1);
        tic.move(1, 2, 2);
        
        
    }
}

let app = new Main();
app.main();
