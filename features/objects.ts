// annotation and inference around objects
const profile = {
    name: 'naveed',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// if we wanna use destructing this is how you write.
const { age, name }: { age: number; name: string } = profile;

const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;
