import { Drone } from "./Drone";

export class SuperDrone implements Drone {
  public beep() {
    console.log("Beep beep beep");
  }

  public spin_rotors() {
    console.log("Rotors are spinning");
  }

  public take_off() {
    console.log("Taking off");
  }
}
