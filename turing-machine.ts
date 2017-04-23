import { Band, EMPTY } from './band';

export class TuringMachine {
    private band: Band;
    private static DOT = '•'

    public constructor(left: number, right: number) {
        let input = '';
        for (let i = 0; i < left; i++) {
            input += TuringMachine.DOT;
        }
        input += EMPTY + EMPTY;
         for (let i = 0; i < right; i++) {
            input += TuringMachine.DOT
        }
        this.band = new Band(input.split(''), 15);
    }

    public compute(): void {
        this.band.printBand();

        let input = this.band.read();
        while (input !== '_') {
            this.band.right(TuringMachine.DOT);
            input = this.band.read();
            this.band.printBand();
        }
        this.band.left('_');
            this.band.printBand();
            input = this.band.read();
            // console.log('input: ', input);
         while (input !== '_') {
            this.band.left(TuringMachine.DOT);
            input = this.band.read();
            this.band.printBand();
         }
    }
}