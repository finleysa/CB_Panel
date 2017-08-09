export class Timer {
  max: number;
  min: number;
  now: number;
  width?: string = "100%";

  constructor(max, min, now) {
    this.max = max;
    this.min = min;
    this.now = now;
  }
}
