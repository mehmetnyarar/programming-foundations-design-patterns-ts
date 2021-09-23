import { Pizza } from "../pizza";

export abstract class ToppingDecorator extends Pizza {
  protected pizza!: Pizza;
  public abstract getDescription(): string;
}
