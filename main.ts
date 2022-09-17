import { uniquePaths, uniquePathsDP } from "./DynamicPrograming/UniquePaths";
import { cloneGraph, Node } from "./Graphs/CloneGraph";
import { canFinish } from "./Graphs/CourseSchedule";
import { minMeetingRooms } from "./Intervals/MeetingRoomsII";
import { setZeroes } from "./Matrix/SetMatrixZeroes";
import { spiralOrder } from "./Matrix/SpiralMatrix";

class Main {
    
    main(args?: string[]) {
        console.log(canFinish(5, [[0,1], [0,2], [1,3], [1, 4], [2,3]]));
    }
}

let app = new Main();
app.main();

/*
    [0,0,0],
    [1,0,0],
    [1,0,0]

*/