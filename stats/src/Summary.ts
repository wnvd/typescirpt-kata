import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReports";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    // we are creating static method because call buildAndPrintReports 
    // was becoming verbose. 
    static winsAnalysisHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport);
    }

    analyzer: Analyzer;
    outputTarget: OutputTarget;

    constructor(analyzer: Analyzer, outputTarget: OutputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }

    buildAndPrintReports(matches: MatchData[]): void {
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output);
    }
}
