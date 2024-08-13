class Shape {
    draw() {
        console.log("Drawing a shape.");
    }
}


class Circle extends Shape {
    draw() {
        console.log("Drawing a circle.");
    }
}


class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle.");
    }
}


const myCircle = new Circle();
myCircle.draw();  

const myRectangle = new Rectangle();
myRectangle.draw();  
