"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader('./src/football.csv');
reader.read();
function count(team) {
    let counter = 0;
    for (let match of reader.data) {
        if (match[1] === team && match[5] === MatchResult_1.MatchResult.HomeWin) {
            counter++;
        }
        else if (match[2] === team && match[5] === MatchResult_1.MatchResult.AwayWin) {
            counter++;
        }
    }
    return counter;
}
console.log(count('Man United'));
console.log(count('Leicester'));
