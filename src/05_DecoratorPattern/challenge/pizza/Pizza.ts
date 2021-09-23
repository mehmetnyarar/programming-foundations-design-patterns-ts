export abstract class Pizza {
  protected description = "Basic Pizza";

  public getDescription() {
    return this.description;
  }

  public abstract cost(): number;
}
