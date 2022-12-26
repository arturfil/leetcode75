class LRUCache {
    capacity: number;
    map:Map<number, number>;
    
    constructor(capacity:number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key:number):number {
        const value = this.map.get(key);
        if(value === undefined) return -1;
        this.map.delete(key); // remove
        this.map.set(key,value); // at to the end -> most recent used
        return value;
    }

    put(key:number, value:number): void {
        if(this.map.size >= this.capacity && !this.map.has(key)) {
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey); // least recent key, delete
        }

        this.map.delete(key); // in case key is already there, delete 
        this.map.set(key, value);// re-add to put as most recent
    }
}