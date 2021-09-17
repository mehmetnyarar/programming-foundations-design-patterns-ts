import { ShareStrategy } from "./ShareStrategy";

export class Txt implements ShareStrategy {
  share() {
    console.log("I'm txting the photo");
  }
}
