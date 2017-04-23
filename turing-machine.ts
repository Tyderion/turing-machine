import { Band } from './band';

export class TuringMachine {
    private band: Band;
    private static DOT = '•'

    public constructor(left: number, right: number) {
        let input = '';
        for (let i = 0; i < left; i++) {
            input += TuringMachine.DOT;
        }
        input += "__";
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
        // let char = this.band.read();
        // if (char !== '_') {
        //     this.band.right('1');
        // } else {
        //     this.band.left();
        // }

        // this.band.left();
        // this.band.printBand();
        // this.band.left();
        // this.band.printBand();
        // this.band.right('x');
        // this.band.printBand();
        
        // this.band.right('x');
        // this.band.printBand();
        
        // this.band.left('y');
        // this.band.printBand();
        // this.band.left();
        // this.band.printBand();
    }
}