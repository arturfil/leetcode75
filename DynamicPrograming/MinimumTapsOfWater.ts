function minTaps(n:number, ranges:number[]) {
    // a map of {[i]: n}, i represents tap i (starting at 0), n represents the furtherest point which can be covered together with tap i using one tap
    const map:{[Key: string]: number} = {}
    
    for (let i = 0; i < ranges.length; i++) {
        const min = Math.max(i - ranges[i], 0)
        const max = Math.min(i + ranges[i], n)
        
        for (let j = min; j <= max; j++) {
            if (j in map) {
                map[j] = Math.max(map[j], max)
            } else {
                map[j] = max
            }
        }
    }
     let pointer = 0
     let count = 0
     
     while (pointer < n) {
         if (map[pointer] === pointer) {
             return -1
         }
         
         pointer = map[pointer]
         count++
     }
     return count
 };