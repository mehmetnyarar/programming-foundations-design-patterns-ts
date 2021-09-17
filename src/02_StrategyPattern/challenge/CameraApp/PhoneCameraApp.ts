import { ShareStrategy } from "../Share";

export abstract class PhoneCameraApp {
  shareStrategy!: ShareStrategy;

  constructor() {}

  setSharedStrategy(shareStrategy: ShareStrategy) {
    this.shareStrategy = shareStrategy;
  }

  share() {
    this.shareStrategy.share();
  }

  take() {
    console.log("Taking the photo");
  }

  save() {
    console.log("Saving the photo");
  }

  abstract edit(): void;
}
