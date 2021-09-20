import { DisplayElement, Observer, Subject } from "../interfaces";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature!: number;
  private humidity!: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(temperature: number, humidity: number, _pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display() {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`
    );
  }
}
