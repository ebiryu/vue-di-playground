import "reflect-metadata";
import { inject, injectable } from "tsyringe";

export const BarKey = Symbol("BAR");
export const FooKey = Symbol("FOO");

interface IBar {
  greet(): void;
}

export class Bar implements IBar {
  constructor() {
    this.val = Math.random();
  }

  val: number;

  greet(): void {
    console.log("Hello.", this.val);
  }
}

@injectable()
export class Foo {
  constructor(@inject(BarKey) private readonly bar: IBar) {}

  greet(): void {
    this.bar.greet();
  }
}
