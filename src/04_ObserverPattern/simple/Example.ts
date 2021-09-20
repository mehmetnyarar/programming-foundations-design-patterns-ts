import { SimpleObserver } from "./SimpleObserver";
import { SimpleSubject } from "./SimpleSubject";

export class Example {
  static main() {
    const simpleSubject = new SimpleSubject();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const simpleObserver = new SimpleObserver(simpleSubject);

    simpleSubject.setValue(80);
  }
}
