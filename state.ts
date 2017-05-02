import { Direction } from './band'

export interface StateResult {
    char: string;
    direction: Direction;
    state: number
}

export interface State {
    name: number;
    apply: (input: string) => StateResult;
}