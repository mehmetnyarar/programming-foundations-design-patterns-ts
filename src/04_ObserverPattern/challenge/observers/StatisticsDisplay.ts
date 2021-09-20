import { DisplayElement, Observer, Subject } from "../interfaces";

export class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp = 0.0;
  private minTemp = 200;
  private tempSum = 0.0;
  private numReadings = 0;
  private weatherData!: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(temp: number, _humidity: number, _pressure: number) {
    this.tempSum += temp;
    this.numReadings++;

    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    if (temp < this.minTemp) {
      this.minTemp = temp;
    }

    this.display();
  }

  public display() {
    const avg = this.tempSum / this.numReadings;
    console.log(
      `Avg/Max/Min temperature = ${avg}/${this.maxTemp}/${this.minTemp}`
    );
  }
}
