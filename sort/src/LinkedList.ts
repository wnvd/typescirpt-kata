import { Sorter } from "./Sorter";

class Node {
    data: number;
    next: Node | null = null;
    constructor(data: number) {
        this.data = data;
    }
}

export class LinkedList extends Sorter {
    head: Node | null = null;
    length: number = 0;

    add(value: number): void {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return; // this is return of void
        }
        let tail = this.head; /// tail here is of type Node class
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
        this.length++;
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }

        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('index out of bounds');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if (!this.head) {
            return;
        }

        let node: Node | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
