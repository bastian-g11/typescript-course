import { MatchData } from '../MatchData';
import { WinsAnalysis } from '../analyzers/WinsAnalysis';
import { HTMLReport } from '../reportTargets/HTMLReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// Summary doesn't really have a lot of behavior. It has references
// to some other objects (classes) (That's composition)
// The benefit of this approach is that we can freely swap the analyzer and the outputTarget
// and get different kinds of information or generate different kinds of reports
export class Summary {
  // This static method let us return a preconfigured instance of summary
  static winsAnalysisWithHTMLReport(teamName: string, fileName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HTMLReport(fileName))
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
