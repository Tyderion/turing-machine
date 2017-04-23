import { Band } from './band';

export const EMPTY = '_';
export const DOT = '•';


export class TuringMachine {
    private band: Band;

    public constructor(left: number, right: number) {
        let input = '';
        for (let i = 0; i < left; i++) {
            input += DOT;
        }
        input += EMPTY + EMPTY;
        for (let i = 0; i < right; i++) {
            input += DOT
        }
        this.band = new Band(input.split(''), 15);
    }

    public compute(): void {
        this.band.printBand();

        let input = this.band.read();
        while (input !== '_') {
            input = this.band.right(DOT);
            this.band.printBand();
        }
        input = this.band.left('_');
        this.band.printBand();
        while (input !== '_') {
            input = this.band.left(DOT);
            this.band.printBand();
        }
    }
}