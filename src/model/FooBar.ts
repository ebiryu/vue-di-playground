import "reflect-metadata";
import { inject, injectable } from "tsyringe";

const BarKey = Symbol("BAR");

interface IBar {
  greet(): void;
}

@injectable()
export class Bar implements IBar {
  constructor() {
    this.val = Math.random();
  }

  val: number;

  greet(): void {
    console.log("Hello.", this.val);
  }
}

export class Foo {
  constructor(@inject(BarKey) private readonly bar: IBar) {}

  greet(): void {
    this.bar.greet();
  }
}
