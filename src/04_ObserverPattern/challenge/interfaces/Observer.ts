export interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}
