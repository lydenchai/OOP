// Activity 1
class Point {
  constructor(public x: number, public y: number) { }

  /**
   * @param other the other point
   * @returns true if the given point is equal to current point
   */
  isEqual(other: Point): boolean {
    return this.x === other.x && this.y === other.y;
  }
}

// Activity 2
class Line {
  constructor(
    public point1: Point,
    public point2: Point,
    public color: string
  ) { }

  isEqual(other: Line): boolean {
    let isEqual = this.point1.isEqual(other.point1) && this.point2.isEqual(other.point2);
    let line = this.color == other.color;
    
    return (isEqual && line); //TODO !!
  }
}

class Graphic2D {
  private lines: Line[] = [];

  contains(newLine: Line): boolean{
    let inCluded = true;
    for(let i = 0; i < this.lines.length; i++){
      if(!this.lines[i].isEqual(newLine)){
        inCluded = false;
      }
    }
    return inCluded;
  }

  // Add new line 
  addLine(newLine: Line) {
    let existAleady = false;
    if( !existAleady){
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

