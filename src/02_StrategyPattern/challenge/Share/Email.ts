import { ShareStrategy } from "./ShareStrategy";

export class Email implements ShareStrategy {
  share() {
    console.log("I'm emailing the photo");
  }
}
