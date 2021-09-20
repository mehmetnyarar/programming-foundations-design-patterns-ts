import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class SimpleSubject implements Subject {
  private observers: Array<Observer>;
  private value = 0;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    const i = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.value);
    }
  }

  setValue(value: number) {
    this.value = value;
    this.notifyObservers();
  }
}
