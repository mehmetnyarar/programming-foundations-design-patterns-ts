import { Observer, DisplayElement, Subject } from "../interfaces";

export class HeatIndexDisplay implements Observer, DisplayElement {
  private heatIndex = 0.0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(t: number, rh: number, _pressure: number) {
    this.heatIndex = this.computeHeatIndex(t, rh);
    this.display();
  }

  private computeHeatIndex(t: number, rh: number) {
    const index =
      16.923 +
      0.185212 * t +
      5.37941 * rh -
      0.100254 * t * rh +
      0.00941695 * (t * t) +
      0.00728898 * (rh * rh) +
      0.000345372 * (t * t * rh) -
      0.000814971 * (t * rh * rh) +
      0.0000102102 * (t * t * rh * rh) -
      0.000038646 * (t * t * t) +
      0.0000291583 * (rh * rh * rh) +
      0.00000142721 * (t * t * t * rh) +
      0.000000197483 * (t * rh * rh * rh) -
      0.0000000218429 * (t * t * t * rh * rh) +
      0.000000000843296 * (t * t * rh * rh * rh) -
      0.0000000000481975 * (t * t * t * rh * rh * rh);
    return index;
  }

  public display() {
    console.log(`Heat index is ${this.heatIndex}`);
  }
}
