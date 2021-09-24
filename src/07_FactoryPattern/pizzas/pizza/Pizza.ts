export abstract class Pizza {
  name!: string;
  dough!: string;
  sauce!: string;
  toppings: string[] = [];

  public getName() {
    return this.name;
  }

  public prepare() {
    console.log("Preparing " + this.name);
  }

  public bake() {
    console.log("Baking " + this.name);
  }

  public cut() {
    console.log("Cutting " + this.name);
  }

  public box() {
    console.log("Boxing " + this.name);
  }

  public toString() {
    // code to display pizza name and ingredients
    return `
      ---- ${this.name} ----\n
      ${this.dough}\n
      ${this.sauce}\n
      ${this.toppings.map((topping) => `${topping}\n`)}
    `;
  }
}
