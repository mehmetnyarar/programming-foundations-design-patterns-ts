import { Iterator } from "../iterator";
import { MenuItem } from "./MenuItem";

export class DinerMenuIterator implements Iterator<MenuItem> {
  private list: Array<MenuItem>;
  private position = 0;

  constructor(list: MenuItem[]) {
    this.list = list;
  }

  public next() {
    const menuItem = this.list[this.position];
    this.position = this.position + 1;

    return menuItem;
  }

  public hasNext() {
    return this.position < this.list.length;
  }
}
