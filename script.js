//complete this code
class Rectangle {
	constructor(width, heigth){
		this.width = width;
		this.heigth = heigth;
	}

	get WidthGet(){
		return this.width;
	}
	get HeigthGet(){
		return this.heigth;
	}
	getArea(){
		return (this.heigth * this.width);
	}
}

class Square extends Rectangle {
	constructor(side){
		this.side = side;
	}
	getPerimeter(){
		return (4 * this.side);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
