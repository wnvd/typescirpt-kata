const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehical = (vehical: { name: string; year: number, broken: boolean }): void => {
    console.log(`Name: ${vehical.name}
                year: ${vehical.year}
                broken: ${vehical.broken}`);
};

printVehical(oldCivic);

// the above type annotaion in really hard to read and very long.

// so to fix this we create a interface

interface Boat {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string; // has to have a function that returns a string
};

const speedBoat: Boat = {
    name: 'lao\'s speed boat',
    year: new Date(),
    broken: false,
    summary(): string {
        return `Name is ${this.name}`;
    }
};


// here we tell function to satisfy vehical face but
// it still has problems, we can remove name, year, broken 
// and interface will still work.
const printBoat = (vehical: Boat): void => {
    // console.log(`
    //             name: ${vehical.name}
    //             year: ${vehical.year}
    //             broken: ${vehical.broken}
    //             `);
    console.log(vehical.summary());
};

printBoat(speedBoat);
// -------------

// here down you see that reportable
interface Reportable {
    summary(): string;
};

const vehical = {
    name: 'old civic',
    year: 2001,
    summary(): string {
        return `name: ${this.name}`;
    }
};

// this is also of type reportable
const drink = {
    color: 'blue',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} of sugar`;
    }
}

const report = (item: Reportable): void => {
    console.log(item.summary());
}


report(drink);
report(vehical);

interface Cup {
    volume: number;
    height: number;
}

const coffeeCup = {
    volume: 300,
    height: 20
};








