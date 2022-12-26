class ParkingSystem {
    cars:number[] = [0, 0, 0];
    
    constructor(big: number, medium: number, small: number) {
        this.cars[0] = big;
        this.cars[1] = medium;
        this.cars[2] = small;
    }

    addCar(carType: number): boolean {
        if (this.cars[carType-1] > 0) {
            this.cars[carType-1] -= 1;
            console.log(`${carType}, ${this.cars}`)
            return true;
        } else {
            return false;
        }
    }
}