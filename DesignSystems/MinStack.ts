interface keyPair{
    val:number;
    min:number;
}

class MinStack {
    data:keyPair[]
    
    constructor() {
        this.data = [];
    }

    push(val: number): void {
        if (this.data.length === 0) {
            this.data.push({val: val, min: val});
        } else {
            let min = val < this.getMin() ? val : this.getMin();
            this.data.push({val, min});
        }
    }

    pop(): void {
        this.data.pop();
    }

    top(): number {
        return this.getTopObj().val;
    }

    getTopObj(): keyPair {
        return this.data[this.data.length-1]
    }

    getMin(): number {
        return this.getTopObj().min;
    }
}