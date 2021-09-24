import { Menu, DinerMenu, MenuItem, PancakeHouseMenu } from "./menu";

export class Waitress {
  private pancakeHouseMenu: Menu;
  private dinerMenu: Menu;

  constructor(pancakeHouseMenu: Menu, dinerMenu: Menu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
  }

  public printMenu() {
    const pancakeHouseMenu = this.pancakeHouseMenu as PancakeHouseMenu;

    // Using the built-in for/of statement
    const breakfastItems = pancakeHouseMenu.getMenuItems();
    for (const m of breakfastItems) {
      this.printMenuItem(m);
    }

    // Using custom iterator
    // const pmIterator: Iterator<MenuItem> = pancakeHouseMenu.createIterator();
    // while (pmIterator.hasNext()) {
    //   this.printMenuItem(pmIterator.next());
    // }

    const dinerMenu = this.dinerMenu as DinerMenu;

    // Using the built-in for/of statement
    const lunchItems = dinerMenu.getMenuItems();
    for (const m of lunchItems) {
      this.printMenuItem(m);
    }

    // Using custom iterator
    // const dmIterator = dinerMenu.createIterator();
    // while (dmIterator.hasNext()) {
    //   this.printMenuItem(dmIterator.next());
    // }
  }

  public printMenuItem(menuItem: MenuItem) {
    console.log(`
      ${menuItem.getName()},
      ${menuItem.getPrice()} --
      ${menuItem.getDescription()}
    `);
  }
}
