class Vehicle {

    // protected drive(): void {
    //     console.log('chugga chugga');
    // }
    //

    // color: string;
    //
    // constructor(color: string) {
    //     this.color = color;
    // }
    //
    //-- shorter way of writing above constructor
    constructor(public color: string) { }

    protected honk(): void {
        console.log('honk honk!');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk(); // not allowed

// inheritance
class Car extends Vehicle {
    // overriding
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('vroom vroom');
    }

    startDrivingprocess(): void {
        this.drive();
        this.honk();
    }
}

const toyota = new Car(4, 'red');
// toyota.drive(); // private now
// toyota.honk();
toyota.startDrivingprocess();
console.log(toyota.color);
