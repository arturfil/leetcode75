import { uniquePaths, uniquePathsDP } from "./DynamicPrograming/UniquePaths";
import { minMeetingRooms } from "./Intervals/MeetingRoomsII";
import { setZeroes } from "./Matrix/SetMatrixZeroes";
import { spiralOrder } from "./Matrix/SpiralMatrix";

class Main {
    
    main(args?: string[]) {
        let list = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
        
        console.log(spiralOrder(list));
    }
}

let app = new Main();
app.main();

/*
    [0,0,0],
    [1,0,0],
    [1,0,0]

*/