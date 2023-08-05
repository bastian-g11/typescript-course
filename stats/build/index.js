"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CSVFileReader } from './composition/CSVFileReader';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { HTMLReport } from './reportTargets/HTMLReport';
const MatchReader_1 = require("./composition/MatchReader");
const Summary_1 = require("./composition/Summary");
// Inheritance Example
// const reader = new MatchReader('football.csv');
// reader.read();
// Composition Example
// Create an object that satisfies the 'DataReader' Interface
// const csvFileReader = new CSVFileReader('football.csv');
// // Create an instance of MatchReader and pass in something that
// // satisfies the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis(teamName),
//   new HTMLReport('report.html')
// );
// Using static methods
const teamName = 'Man United';
const matchReader = MatchReader_1.MatchReader.readFromCSV('football.csv');
const summary = Summary_1.Summary.winsAnalysisWithHTMLReport(teamName, 'report.html');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
