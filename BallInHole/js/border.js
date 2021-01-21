import { CanvasObj } from './canvasObj.js';

class Border extends CanvasObj {
    constructor(canvas, width, height, strokeWidth = 5, color = 'red') {
        super(canvas, -width / 2, -height / 2);

        this.width = width;
        this.height = height;
        this.strokeWidth = strokeWidth;
        this.color = color;
    }

    Draw() {
        this.canvas.ctx.beginPath();
        this.canvas.ctx.lineWidth = this.strokeWidth;
        this.canvas.ctx.rect(this.X, this.Y, this.width, this.height);
        this.canvas.ctx.strokeStyle = this.color;
        this.canvas.ctx.closePath();
        this.canvas.ctx.stroke();
    }

    CollideWithPoint(x, y) {
        if (x < this.x || x > this.x + this.width){
            return true;
        }
        if (y < this.y || y > this.y + this.height){
            return true;
        }
        return false;
    }
}

export { Border };