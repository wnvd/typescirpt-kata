import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
    data: string;
    constructor(data: string) {
        super();
        this.data = data;
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase().charCodeAt(0) > this.data[rightIndex].toLowerCase().charCodeAt(0);
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('');

        const leftHand = characters[leftIndex];

        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join('');
    }
}
