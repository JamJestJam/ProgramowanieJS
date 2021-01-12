class CanvasObj {
    constructor(canvas, posX = 0, posY = 0) {
        this.canvas = canvas;
        this.x = posX;
        this.y = posY;
    }

    Draw() { }

    // eslint-disable-next-line no-unused-vars
    CollideWithPoint(x, y) { return false; }

    get X() { return this.x + this.canvas.X; }
    get Y() { return this.y + this.canvas.Y; }
}

export { CanvasObj };