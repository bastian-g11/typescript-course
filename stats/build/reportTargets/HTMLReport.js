"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = void 0;
const fs_1 = require("fs");
class HTMLReport {
    constructor(fileName) {
        this.fileName = fileName;
    }
    print(report) {
        const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>
        ${report}
      </div>
    </div>`;
        (0, fs_1.writeFileSync)(this.fileName, html);
    }
}
exports.HTMLReport = HTMLReport;
