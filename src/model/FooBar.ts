import "reflect-metadata";
import { injectable } from "tsyringe";

interface IBar {
  greet(): void;
}

@injectable()
export class Bar implements IBar {
  constructor() {}

  greet(): void {
    console.log("Hello.");
  }
}

export class Foo {
  constructor(private readonly bar: IBar) {}

  greet(): void {
    this.bar.greet();
  }
}
