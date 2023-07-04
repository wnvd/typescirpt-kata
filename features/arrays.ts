const carMakers: string[] = ["ford", "toyota", 'chevy'];
// if we are only initialising array we will need annotation
const carMarker2: string[] = [];

const dates = [new Date(), new Date()];

// 2d array
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

const carsByMake2: string[][] = [];

// help with inference when extracting values
const mycar = carsByMake[0];
const myCar = carsByMake.pop();

// prevent incompatible values
carMakers.push('100');

// help with map
carMakers.map((maker: string): string => {
    return maker.toLowerCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];

// will give error
// importantDates.push(200);
