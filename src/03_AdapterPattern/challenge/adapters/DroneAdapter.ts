import { Duck } from "../../ducks/duck";
import { Drone } from "../drone";

export class DroneAdapter implements Duck {
  drone!: Drone;

  constructor(drone: Drone) {
    this.drone = drone;
  }

  quack() {
    this.drone.beep();
  }

  fly() {
    this.drone.spin_rotors();
    this.drone.take_off();
  }
}
