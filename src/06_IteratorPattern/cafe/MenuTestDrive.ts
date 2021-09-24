import { DinerMenu, PancakeHouseMenu } from "./menu";
import { Waitress } from "./Waitress";

export class MenuTestDrive {
  static main() {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinerMenu = new DinerMenu();
    const waitress = new Waitress(pancakeHouseMenu, dinerMenu);
    waitress.printMenu();
  }
}
