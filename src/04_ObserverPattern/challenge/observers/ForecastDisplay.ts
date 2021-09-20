import { DisplayElement, Observer, Subject } from "../interfaces";

export class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure = 29.92;
  private lastPressure!: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update(_temp: number, _humidity: number, pressure: number) {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;

    this.display();
  }

  public display() {
    let forecast = "";
    if (this.currentPressure > this.lastPressure) {
      forecast = "Improving weather on the way!";
    } else if (this.currentPressure === this.lastPressure) {
      forecast = "More of the same";
    } else if (this.currentPressure < this.lastPressure) {
      forecast = "Watch out for cooler, rainy weather";
    }

    console.log(`Forecast: ${forecast}`);
  }
}
