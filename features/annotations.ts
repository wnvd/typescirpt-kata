let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null; // value has a name as type.
let nothing: undefined = undefined;

// buit in object
let now: Date = new Date();

// array
let colors: string[] = ['red', 'blue', 'green'];
let myNumber: number[] = [1, 2, 3, 4, 5, 65];
let truths: boolean[] = [true, false, true, false, false];

// class
class Car {
    drive() {
        console.log('driving a car');
    }
}
let car: Car = new Car();

// object literal 
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// when to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// so this is something that you do. you add type 'structure' for function that returns any.
const coordiantes: { x: number; y: number } = JSON.parse(json);
console.log(coordiantes); // {x: 10, y: 20}
// any is just a type like 'number' or 'string'

// means TS has no idea what the type is - can't
// check for correct property references

// Avoid varaibles with 'any' type at all costs.

// 2) when we declare variable on one line and intialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // or let foundWord = false;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Varaible whose type can not be inferred correctly
let numbers = [-10, -1, 12];
let numbeAboveZero: boolean | number = false; // more then one type of values //* this is very bad in most cases

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numbeAboveZero = numbers[i];
    }
}
