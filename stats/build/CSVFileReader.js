"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs_1 = require("fs");
class CSVFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = (0, fs_1.readFileSync)(this.fileName, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.CSVFileReader = CSVFileReader;
