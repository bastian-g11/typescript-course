"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("../analyzers/WinsAnalysis");
const HTMLReport_1 = require("../reportTargets/HTMLReport");
// Summary doesn't really have a lot of behavior. It has references
// to some other objects (classes) (That's composition)
// The benefit of this approach is that we can freely swap the analyzer and the outputTarget
// and get different kinds of information or generate different kinds of reports
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    // This static method let us return a preconfigured instance of summary
    static winsAnalysisWithHTMLReport(teamName, fileName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HTMLReport_1.HTMLReport(fileName));
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
