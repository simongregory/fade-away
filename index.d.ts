/// <reference types="node" />

interface Fader extends Function {
	(attempt: number, delay?: number): number;
}

export const fibonacci:Fader;
export const exponential:Fader;
