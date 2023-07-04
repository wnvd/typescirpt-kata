// type annotation
const add = (a: number, b: number): number => {
    return a + b;
};

// dont do this : 
// if we dont specify a return type.
//  tsc wont be able to tell us if we made a mistake.
const substract = (a: number, b: number) => {
    a - b;
};

function divide(a: number, b: number): number {
    return a / b;
};

const multiply = function(a: number, b: number): number {
    return a * b;
};

// technically function defination with void
// can return undefined, return null
const logger = (message: string): void => {
    console.log(message);
};

// this one is a pretty rare case but we tell tsc that we 
// are never gonna reach the end of the function.
const throwError = (message: string): never => {
    throw new Error(message);
};

const forecaset = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

// es2015 
const logWeather_es2015 = ({ date, weather }) => {

}
// here when we pass object as argument we destructor the object then after ':' we  annotate it 
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}












    
