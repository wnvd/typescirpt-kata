"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([0, 10, -1, 5, 0, 11]);
// const charactersCollection = new CharactersCollection('asdfljaf');
//
// const sorter = new Sorter(numbersCollection);
// const sorter2 = new Sorter(charactersCollection);
// sorter.bSort();
// sorter2.bSort();
//
// console.log(numbersCollection.data);
// console.log(charactersCollection.data);
//
// const linkedlist = new LinkedList();
// linkedlist.add(500);
// linkedlist.add(200)
// linkedlist.add(-10);
// linkedlist.add(-3);
// linkedlist.add(4);
// const sorter3 = new Sorter(linkedlist);
// sorter3.bSort();
// linkedlist.print();
// console.log('linked list length -> ', linkedlist.length);
// -- Implementation using abstract classes
const numbersCollection = new NumbersCollection_1.NumbersCollection([0, 10, -1, 5, 0, 11]);
numbersCollection.bSort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('fedcba');
charactersCollection.bSort();
console.log(charactersCollection.data);
const linkedlist = new LinkedList_1.LinkedList();
linkedlist.add(500);
linkedlist.add(200);
linkedlist.add(-10);
linkedlist.add(0);
linkedlist.add(5);
linkedlist.bSort();
linkedlist.print();
