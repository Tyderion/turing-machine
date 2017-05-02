import { Band, Direction } from './band';

import * as Multiply from './multiply.json';

export const EMPTY = '_';
export const DOT = '•';

export class TuringMachine {
    private band: Band;

    private current = 0;
    private states = Multiply;

    private get currentState() {
        return this.states[this.current];
    }

    private get input() {
        return this.band.read();
    }

    private get printSteps(): boolean {
        return this.delay > 0;
    }

    public constructor(private left: number, private right: number, private delay: number = 0) {
        let input = '';
        for (let i = 0; i < this.left; i++) {
            input += DOT;
        }
        input += EMPTY;
        for (let i = 0; i < this.right; i++) {
            input += DOT
        }
        this.band = new Band(input.split(''), 30, this.printSteps);
    }

    public compute(): void {
        this.step(this.delay).then(() => this.compute()).catch(() => {
            if (!this.printSteps) {
                this.band.printBand(this.current);
                console.log('')
            }
            console.log(`\nComputed ${this.left} * ${this.right} in ${this.band.count} steps`);
            console.log('Final State: ', this.current);
            console.log(`Result: `, this.band.number);
        });
    }

    private step(delay: number = 0): Promise<any> {
        if (delay === 0) {
            this.doStep();
            return Promise.resolve();
        } else {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        this.doStep();
                        resolve();
                    } catch (err) {
                        reject(err);
                    }
                }, delay);
            });
        }
    }

    private doStep() {
        let input = this.band.read();
        let transition = this.currentState[input];
        if (transition.direction === Direction.RIGHT) {
            this.band.right(transition.put);
        } else {
            this.band.left(transition.put);
        }
        if (transition.state === -1) {
            throw new Error('Machine Halted');
        }
        this.current = transition.state;
        this.band.printBand(this.current);
    }
}