export class TuringMachine {
    private band: string[];

    public constructor(input: string) {
        this.band = input.split('');
    }

    public compute(): void {
        console.log('hello i am computing');
    }
}