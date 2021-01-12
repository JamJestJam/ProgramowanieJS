import { Border } from './Border.js';
import { CanvasControler } from './canvasControler.js';
import { Circle } from './Circle.js';

class Game {
    constructor(gameWidth = 1000, gameHeight = 1000) {
        this.canvasControler = new CanvasControler();

        this.border = new Border(this.canvasControler, gameWidth, gameHeight);
        this.circle = new Circle(this.canvasControler, 0, 0, 15);

        this.Loop();
    }

    Loop = () => {
        this.UpdateAll();
        this.DrawAll();

        requestAnimationFrame(this.Loop);
    }

    DrawAll() {
        this.canvasControler.clear();
        this.border.Draw();
        this.circle.Draw();
    }

    UpdateAll() {
        
    }
}

new Game();