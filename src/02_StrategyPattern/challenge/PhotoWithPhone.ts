import prompts from "prompts";
import { BasicCameraApp } from "./CameraApp";
import { Email, Social, Txt } from "./Share";

export class PhotoWithPhone {
  static async main() {
    const cameraApp = new BasicCameraApp();

    const share = await PhotoWithPhone.getSharing();
    switch (share) {
      case "t":
        cameraApp.setSharedStrategy(new Txt());
        break;
      case "e":
        cameraApp.setSharedStrategy(new Email());
        break;
      case "s":
        cameraApp.setSharedStrategy(new Social());
        break;
    }

    cameraApp.take();
    cameraApp.edit();
    cameraApp.save();
    cameraApp.share();
  }

  static async getSharing() {
    const prompt = await prompts({
      type: "text",
      name: "response",
      message: "Share with txt (t), email (e), or social media (s)?",
    });

    return prompt.response;
  }
}
