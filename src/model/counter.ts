import "reflect-metadata";
import { inject, injectable } from "tsyringe";

export const NumberKey = Symbol("NUMBER");
export const CounterKey = Symbol("COUNTER");

interface INumber {
  value: number;
  set(newValue: number): void;
}

export class CounterNumber implements INumber {
  constructor() {
    this.value = 0;
  }

  value: number;

  set(newValue: number) {
    this.value = newValue;
  }
}

@injectable()
export class Counter {
  constructor(@inject(NumberKey) readonly number: INumber) {
    console.log(number);
  }

  increment() {
    this.number.set(this.number.value + 1);
  }

  decrement() {
    this.number.set(this.number.value - 1);
  }
}
