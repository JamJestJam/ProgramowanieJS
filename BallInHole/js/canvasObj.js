class CanvasObj {
    constructor(canvas, posX = 0, posY = 0) {
        this.canvas = canvas;
        this.X = posX;
        this.Y = posY;
    }

    // eslint-disable-next-line no-unused-vars
    Draw = () => { }

    // eslint-disable-next-line no-unused-vars
    CollideWithPoint = (x, y) => { return false; }

    get X() { return this.x + this.canvas.X; }
    get Y() { return this.y + this.canvas.Y; }

    set X(value) { this.x = value; }
    set Y(value) { this.y = value; }
}

export { CanvasObj };