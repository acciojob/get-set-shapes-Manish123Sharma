class Rectangle {
	constructor(width, height) {
		// Ensure positive integers
		if (width <= 0 || height <= 0) throw new Error("Width and height must be positive integers.");
		this._width = width;
		this._height = height;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	getArea() {
		return this._width * this._height;
	}
}

class Square extends Rectangle {
	constructor(side) {
		// Ensure positive integer
		if (side <= 0) throw new Error("Side must be a positive integer.");
		super(side, side); // Set both width and height
	}

	getPerimeter() {
		return 4 * this.width; // width === side
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
