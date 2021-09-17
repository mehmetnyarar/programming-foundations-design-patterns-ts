import { DuckTestDrive } from "../ducks/DuckTestDrive";
import { DroneAdapter } from "./adapters/DroneAdapter";
import { SuperDrone } from "./drone";

export class DuckSimulator extends DuckTestDrive {
  static main() {
    const drone = new SuperDrone();
    const droneAdapter = new DroneAdapter(drone);
    DuckSimulator.testDuck(droneAdapter);
  }
}
