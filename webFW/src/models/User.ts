import { Eventing, Callback } from "./Eventing";
import axios, { AxiosResponse } from "axios";

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

// interface Event {
//     events: {} = { };
//     on(eventName: string, callback: Callback): void;
//     trigger(eventName: string): void;
//}

export class User {
    private data: UserProps;
    public events: Eventing = new Eventing();

    constructor(data: UserProps) {
        this.data = data;
    }

    get(propName: string): (string | number) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        // take from second arg Object and
        // assign it to first arg Object.
        // copy and override.
        Object.assign(this.data, update);
    }


    

}
