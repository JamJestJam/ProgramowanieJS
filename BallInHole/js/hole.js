import { Circle } from './Circle.js';

class Hole extends Circle {
    constructor(canvas, cx = 0, cy = 0, r = 30, color = 'black') {
        super(canvas, cx, cy, r, color);
    }
}

export { Hole };