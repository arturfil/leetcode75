class FreqStack {
    freqMap: Map<number, number>
    stack: number[][]
    
    constructor() {
        this.freqMap = new Map();
        this.stack = [];
    }

    push(val: number): void {
        const freq = this.freqMap.has(val) ? this.freqMap.get(val)! + 1 : 1;
        this.freqMap.set(val, freq);
        
        if (!this.stack[freq]) this.stack[freq] = [val];
        else this.stack[freq].push(val);
    }

    pop(): number {
        const top = this.stack[this.stack.length - 1]; // Highest frequency
        const val = top.pop()!; // Get the last value added to this frequency
        if (!top.length) this.stack.pop(); // If this frequency has no more value, remove it
        this.freqMap.set(val, this.freqMap.get(val)! - 1); // Update the frequency map
        
        return val;
    }
}