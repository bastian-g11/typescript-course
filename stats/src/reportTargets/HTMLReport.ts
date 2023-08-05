import { writeFileSync } from "fs";
import { OutputTarget } from "../composition/Summary";

export class HTMLReport implements OutputTarget {
  constructor(public fileName: string) {}

  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>
        ${report}
      </div>
    </div>`;

    writeFileSync(this.fileName, html);
  }
}