class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.area = width * height;
    }
}
let smallRectangle = new Rectangle(100, 200);
smallRectangle.height = 50;
console.log("the area of this rectangle is :" + smallRectangle.area);
