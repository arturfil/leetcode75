import { compareVersion } from "./Strings/CompareVersionNumbers";
import { numberToWords } from "./Strings/IntegerToEnglishWords";

class Main {

    main(args?: string[]) {
        console.log(numberToWords(1432));
    }
}

let app = new Main();
app.main();
