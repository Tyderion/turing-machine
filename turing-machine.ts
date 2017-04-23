import { Band, Direction } from './band';

export const EMPTY = '_';
export const DOT = '•';


export const Multiplay = {
    0: {
        EMPTY: {
            put: EMPTY,
            direction: Direction.RIGHT,
            state: 1
        },
        DOT: {
            put: EMPTY,
            direction: Direction.RIGHT,
            state: 2
        }
    },
    1: {
         EMPTY: {
            put: EMPTY,
            direction: Direction.RIGHT,
            state: 14
        },
         DOT: {
            put: EMPTY,
            direction: Direction.RIGHT,
            state: 2
        }
    },
    2: {
         EMPTY: {
            put: EMPTY,
            direction: Direction.RIGHT,
            state: 3
        },
        DOT: {
            put: DOT,
            direction: Direction.RIGHT,
            state: 2
        }
    },
    14: {
         EMPTY: {
            put: EMPTY,
            direction: Direction.LEFT,
            state: -1
        },
        DOT: {
            put: EMPTY,
            direction: Direction.RIGHT,
            state: 14
        }
    }
}


export class TuringMachine {
    private band: Band;

    private get input() {
        return this.band.read();
    }

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

    private moveToEndOfDots() {
        while (this.input !== EMPTY) {
            this.band.right(this.input);
        }
    }

        private moveToBeginningOfDots() {
        while (this.input !== EMPTY) {
            this.band.left(this.input);
        }
    }

    public compute(): void {
        this.band.printBand();
        this.band.printSteps = true;
        // if (this.input !== EMPTY) {
        //     this.band.right(EMPTY);
        // }
        this.moveToEndOfDots();
        this.band.left(EMPTY);
        this.moveToBeginningOfDots();
        // if (this.input !== EMPTY) {
        //     this.band.right(EMPTY);
        // }
        // this.moveToEndOfDots();

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