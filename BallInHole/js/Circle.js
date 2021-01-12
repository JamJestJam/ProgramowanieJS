import { CanvasObj } from './canvasObj.js';

class Circle extends CanvasObj {
    constructor(canvas, cx, cy, r, color = 'black') {
        super(canvas, cx, cy);

        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.color = color;
    }

    Draw = () => {
        this.canvas.ctx.beginPath();
        this.canvas.ctx.fillStyle = this.color;
        this.canvas.ctx.arc(this.X, this.Y, this.r, 0, 2 * Math.PI);
        this.canvas.ctx.closePath();
        this.canvas.ctx.fill();
    }

    CollideWithPoint = (x, y) => {
        return ((x - this.cx) * (x - this.cx)) + ((y - this.cy) * (y - this.cy)) < this.r * this.r;
    }
}

export { Circle };