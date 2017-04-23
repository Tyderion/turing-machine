
export const EMPTY = '_';

export class Band {
    private static SEPERATOR = '|';
    private current: number;
    private band: string[];
    private positionString = '';
    constructor(private initial: string[], private displaySize: number) {
        this.band = [...this.initial];
        this.current = 0;
        for (let i = 0; i < displaySize*(Band.SEPERATOR.length + 1) + 1; i++) {
            this.positionString += ' ';
        }
        this.positionString += 'v';
    }

    public right(put?: string): void {
        if (put && put.length > 1) {
            throw new Error("Can only put one char into a location of the band");
        }
        this.move(put ? put : "_", Direction.RIGHT);
    }

    public left(put?: string): void {
        if (put && put.length > 1) {
            throw new Error("Can only put one char into a location of the band");
        }
        this.move(put ? put : "_", Direction.LEFT);
    }

    private move(str: string, dir: Direction) {
        if (this.current === 0 && dir === Direction.LEFT) {
            this.band[this.current] = str;
            this.band.unshift(EMPTY);
        } else if (this.current === this.band.length - 1 && dir === Direction.RIGHT) {
            this.band.push(str);
            this.current++;
        } else {
            this.band[this.current] = str;
            if (dir === Direction.LEFT) {
                this.current--;
            } else {
                this.current++;
            }
        }
    }

    public read(): string {
        return this.band[this.current];
    }

    public printBand() {
        // let start = this.current - this.displaySize;
        let result: string[] = [];
        for (let counter = this.current - this.displaySize; counter <= this.current + this.displaySize; counter++) {
            if (counter < 0 || counter >= this.band.length) {
                result.push('_');
            } else {
                result.push(this.band[counter])
            }
        }
        let band = result.join(Band.SEPERATOR);

        console.log(`${this.positionString}\n${this.wrap(band)}`);
    }

    private wrap(str, empty: boolean = false) {
        let sep = empty ? ' ' : Band.SEPERATOR;
        return sep + str + sep;
    }
}

enum Direction {
    LEFT, RIGHT
}