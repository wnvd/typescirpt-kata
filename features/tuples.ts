const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

const pepsi2: [string, boolean, number]; = ['brown', true, 40];
// doing samething 
//
// create you type
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];


const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 4000,
    weight: 3354
};
