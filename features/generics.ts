class ArrayOfNumbers {
    public collection: number[];
    constructor(collection: number[]) {
        this.collection = collection;
    }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfString {
    public collection: string[];
    constructor(collection: string[]) {
        this.collection = collection;
    }

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T>{
    collection: T[];
    constructor(collection: T[]) {
        this.collection = collection;
    }

    get(index: number): T {
        return this.collection[index];
    }
}
//-- this is how you use'em.
const arr = new ArrayOfAnything<string>(['abc']);

//-- if we don't specify the type inference will take place.
const arr2 = new ArrayOfAnything(['abc']);

// Example of generics with functions

// as you see there is code duplication 
// therefore we can use generics instead.
function printString(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumber(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// this is how that will work.
function print<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// dont put string[] for T, that will mean its string[][]
// instead of string[] for T

// -- Generics Constraints

class Car {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

interface Printable {
    print(): void;
}
// here you are setting 'Constraints' for Generic 'T'

function printHouseOrCar<T extends Printable>(arr: T[]) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

// here T is of Type House and you can pass array of class 
// House intances, like below
printHouseOrCar<House>([new House(), new House()]);
