import { Iterator } from "./Iterator";

export class GenericIterator<T> implements Iterator<T> {
  private iterator: IterableIterator<T>;
  private currentValue!: T;

  constructor(list: Array<T>) {
    this.iterator = list[Symbol.iterator]();
  }

  public next() {
    return this.currentValue;
  }

  public hasNext() {
    const nextItem = this.iterator.next();

    if (nextItem.done) return false;

    this.currentValue = nextItem.value;

    return true;
  }
}
