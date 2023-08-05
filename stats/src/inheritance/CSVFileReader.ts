import { readFileSync } from 'fs';

export abstract class CSVFileReader<T> {
  data: T[] = [];
  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
