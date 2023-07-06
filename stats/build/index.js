"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
//-- created a static function in MatchReader so dont need it.
// create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('./src/football.csv');
// -- Created a static function, to make less verbose
// Create an instance of MatchReader and pass in somehting satisfying
// the 'DataReader' interface.
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader_1.MatchReader.fromCsv('./src/football.csv');
matchReader.load();
//-- we can now reference matchReader.matches
//-- this was too verbose so we created a staitic method in class Summary
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const summary = Summary_1.Summary.winsAnalysisHtmlReport('Man United');
summary.buildAndPrintReports(matchReader.matches);
