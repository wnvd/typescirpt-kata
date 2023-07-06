import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader('./src/football.csv');
reader.read();

function count(team: string): number {
    let counter = 0;
    for (let match of reader.data) {
        if (match[1] === team && match[5] === MatchResult.HomeWin) {
            counter++;
        } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
            counter++;
        }
    }
    return counter;
}

console.log(count('Man United'));
console.log(count('Leicester'));
