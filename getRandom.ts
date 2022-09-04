export function getRandom(max:number, min:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}