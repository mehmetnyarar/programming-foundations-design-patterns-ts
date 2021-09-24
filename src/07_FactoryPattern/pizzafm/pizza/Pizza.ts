export abstract class Pizza {
  protected name!: string;
  protected dough!: string;
  protected sauce!: string;
  protected toppings: string[] = [];

  prepare() {
    console.log("Prepare " + this.name);
    console.log("Tossing dough...");
    console.log("Adding sauce...");
    console.log("Adding toppings: ");
    for (const topping of this.toppings) {
      console.log("   " + topping);
    }
  }

  bake() {
    console.log("Bake for 25 minutes at 350");
  }

  cut() {
    console.log("Cut the pizza into diagonal slices");
  }

  box() {
    console.log("Place pizza in official PizzaStore box");
  }

  public getName() {
    return this.name;
  }

  public toString() {
    return `
      ---- ${this.name} ----\n
      ${this.dough}\n
      ${this.sauce}\n
      ${this.toppings.map((topping) => `${topping}\n`)}
    `;
  }
}
