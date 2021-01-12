import { Circle } from './Circle.js';

class Tracker extends Circle {
    constructor(canvas, parent, time, r, color = 'gray') {
        super(canvas, parent.x, parent.y, r, color);
        this.time = time;
        this.parent = parent;
    }

    Move() {
        const x = this.parent.x;
        const y = this.parent.y;

        setTimeout(() => {
            this.x = x;
            this.y = y;
        }, this.time);
    }
}

export { Tracker };