import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class SimpleObserver implements Observer {
  private value!: number;
  private simpleSubject: Subject;

  constructor(simpleSubject: Subject) {
    this.simpleSubject = simpleSubject;
    this.simpleSubject.registerObserver(this);
  }

  update(value: number) {
    this.value = value;
    this.display();
  }

  display() {
    console.log("Value: " + this.value);
  }
}
