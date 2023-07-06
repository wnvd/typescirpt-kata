import * as fs from "node:fs";

export abstract class CsvFileReader<T> {
    data: T[] = [];
    fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName
    }

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8',
        }).split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map(this.mapRow);
    }
}
