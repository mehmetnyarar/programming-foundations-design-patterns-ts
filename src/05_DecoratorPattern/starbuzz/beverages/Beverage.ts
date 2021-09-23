export abstract class Beverage {
  protected description = "Unknown Beverage";

  public getDescription() {
    return this.description;
  }

  public abstract cost(): number;
}
