export class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea = () => {
    return this.height + this.width;
  };

  get area() {
    return this.calcArea();
  }
}
