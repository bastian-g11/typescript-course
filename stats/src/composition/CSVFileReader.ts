import { readFileSync } from 'fs';

export class CSVFileReader {
  data: string[][] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
