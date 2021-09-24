import { Iterator } from "../iterator";
import { MenuItem } from "./MenuItem";

export interface Menu {
  createIterator(): Iterator<MenuItem>;
}
