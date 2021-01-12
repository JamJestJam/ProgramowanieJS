import { Circle } from './Circle.js';
import { Tracker } from './tracker.js';

class Ball extends Circle {
    constructor(canvas, cx = 0, cy = 0, r = 15, color = 'black') {
        super(canvas, cx, cy, r, color);

        this.trackers = new Array();
        this.trackers.push(new Tracker(canvas, this, 100, r - 1));
        this.trackers.push(new Tracker(canvas, this, 200, r - 2));
        this.trackers.push(new Tracker(canvas, this, 300, r - 3));
        this.trackers.push(new Tracker(canvas, this, 400, r - 4));
        this.trackers.push(new Tracker(canvas, this, 500, r - 5));
    }

    Draw() {
        this.trackers.forEach(element => {
            element.Draw();
        });
        super.Draw();
    }

    MoveTrackers() {
        if (this.trackers != undefined)
            this.trackers.forEach(element => {
                element.Move();
            });
    }

    Move(x, y) {
        if (x !== undefined)
            this.x += x;
        if (y != undefined)
            this.y += y;
        this.MoveTrackers();
    }

    MoveAndCenter(x, y) {
        this.Move(x, y);
        this.canvas.X = this.x;
        this.canvas.Y = this.y;
    }
}

export { Ball };