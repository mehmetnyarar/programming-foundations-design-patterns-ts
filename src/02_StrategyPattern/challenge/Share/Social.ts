import { ShareStrategy } from "./ShareStrategy";

export class Social implements ShareStrategy {
  share() {
    console.log("I'm posting the photo on social media");
  }
}
