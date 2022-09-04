export function findOccurrences(text: string, first: string, second: string): string[] {
    const map = new Map();
    let txtArr = text.split(" ");
    for(let i = 0; i < txtArr.length-1; i++) {
        if (map.has(`${txtArr[i]} ${txtArr[i+1]}`)) {
            map.set(`${txtArr[i]} ${txtArr[i+1]}`, [...map.get(`${txtArr[i]} ${txtArr[i+1]}`), (txtArr[i+2])])
        } else {
            map.set(`${txtArr[i]} ${txtArr[i+1]}`, [txtArr[i+2]])
        }
    }
    if (map.has(`${first} ${second}`)) {
        return map.get(`${first} ${second}`);
    } else {
        return [];       
    }
}

/*
    let text = "alice is a good girl she is a good student", first = "a", second = "good";
    console.log(findOccurrences(text, first, second));
*/