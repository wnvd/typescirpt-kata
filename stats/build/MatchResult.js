"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultMap = exports.MatchResult = void 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (exports.MatchResult = MatchResult = {}));
;
exports.ResultMap = {
    [MatchResult.HomeWin]: "H",
    [MatchResult.AwayWin]: "A",
    [MatchResult.Draw]: "D",
};
