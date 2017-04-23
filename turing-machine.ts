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
        input += EMPTY;
        for (let i = 0; i < right; i++) {
            input += DOT
        }
        this.band = new Band(input.split(''), 30);
    }

    private moveToEndOfDots(input: string) {
        if (input !== EMPTY) {
            input = this.band.right(EMPTY);
        }
        while (input !== EMPTY) {
             input = this.band.right(input);
        }
        input = this.band.right(EMPTY);
        return input;
    }

    public compute(): void {
        this.band.printBand();
        this.band.printSteps = true;
        let input = this.band.read();
        input = this.moveToEndOfDots(input);
        input = this.moveToEndOfDots(input);
      
        // if (input !== EMPTY) {
        //     input = this.band.right(EMPTY);
        // }
        // input = this.band.right(input);
        // while (input !== EMPTY) {
        //      input = this.band.right(input);
        // }
        // input = this.band.right(EMPTY);

        // input = this.moveToEndOfDots(input);
        //  while (input !== EMPTY) {
        //      input = this.band.right(input);
        // }
        // this.moveToEndOfDots(input);
        // if (input !== EMPTY) {
        //     input = this.band.right(EMPTY);
        // }
        // while (input !== EMPTY) {
        //      input = this.band.right(input);
        // }
        // input = this.band.right(EMPTY);



        // let input = this.band.read();
        // while (input !== '_') {
        //     input = this.band.right(DOT);
        //     this.band.printBand();
        // }
        // input = this.band.left('_');
        // this.band.printBand();
        // while (input !== '_') {
        //     input = this.band.left(DOT);
        //     this.band.printBand();
        // }
    }
}