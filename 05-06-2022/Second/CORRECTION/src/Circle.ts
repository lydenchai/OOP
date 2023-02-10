const PI = 3.14;
import { Shape } from "./Shape";
export class Circle extends Shape {
  private radius: number;
  constructor(leftX: number, bottomY: number, radius: number) {
    super(leftX, bottomY);
    this.radius = radius;
  }
  getWidth(): number {
    return this.radius * this.radius;
  }
  getHeight(): number {
    return this.getWidth() * this.getWidth();
  }
  getArea(): number {
    return this.radius * this.radius * PI;
  }
}
