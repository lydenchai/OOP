// Activity 1
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * @param other the other point
     * @returns true if the given point is equal to current point
     */
    isEqual(other) {
        return this.x == this.x && this.y == this.y; //TODO !!
    }
}
// Activity 2
class Line {
    constructor(point1, point2, color) {
        this.point1 = point1;
        this.point2 = point2;
        this.color = color;
    }
    isEqual(other) {
        let firstP = this.point1.isEqual(other.point1);
        let secondeP = this.point2.isEqual(other.point2);
        let line = this.color == other.color;
        return (firstP && secondeP && line); //TODO !!
    }
}
class Graphic2D {
    constructor() {
        this.lines = [];
    }
    addLine(newLine) {
        let existAleady = false;
        if (!existAleady) {
            return this.lines.push(newLine);
        }
    }
}
let p1 = new Point(10, 15);
let p2 = new Point(50, 15);
let p3 = new Point(10, 15);
let p4 = new Point(50, 15);
let l1 = new Line(p1, p2, "red");
let l2 = new Line(p3, p4, "red");
let myGraphic = new Graphic2D();
myGraphic.addLine(l1);
myGraphic.addLine(l2);
