import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.person.firstName();
        //-- this wont work, you have to initialize locaion object
        // this.location.lat = faker.location.latitude();
        // this.location.lng = faker.location.longitude();

        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        };
    }
    markerContent(): string {
        return `UserName: ${this.name}`;
    }

    color: string = 'red';
}
