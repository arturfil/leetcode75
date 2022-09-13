import { uniquePaths, uniquePathsDP } from "./DynamicPrograming/UniquePaths";
import { minMeetingRooms } from "./Intervals/MeetingRoomsII";

class Main {
    
    main(args?: string[]) {
        minMeetingRooms([[0,30], [5,10], [15, 20], [11, 16]] );
    }
}

let app = new Main();
app.main();
