import { Circle } from './Circle.js';

class Win extends Circle {
    constructor(canvas, cx = 0, cy = 0, r = 30, color = 'green') {
        super(canvas, cx, cy, r, color);
    }
}

export { Win };