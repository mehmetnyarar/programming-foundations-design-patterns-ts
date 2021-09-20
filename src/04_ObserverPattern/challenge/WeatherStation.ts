/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  CurrentConditionsDisplay,
  ForecastDisplay,
  StatisticsDisplay,
} from "./observers";
import { WeatherData } from "./WeatherData";

export class WeatherStation {
  static main() {
    const weatherData = new WeatherData();

    const currentDisplay = new CurrentConditionsDisplay(weatherData);
    const statisticsDisplay = new StatisticsDisplay(weatherData);
    const forecastDisplay = new ForecastDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);
  }
}
