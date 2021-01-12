import { Ball } from './Ball.js';
import { Border } from './Border.js';
import { CanvasControler } from './canvasControler.js';

class Game {
    constructor(gameWidth = 1000, gameHeight = 5000) {
        this.canvasControler = new CanvasControler();

        this.border = new Border(this.canvasControler, gameWidth, gameHeight);
        this.ball = new Ball(this.canvasControler, 0, 0, 15, 'black');

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
        this.ball.Draw();
    }

    UpdateAll() {
        this.ball.MoveAndCenter(1,0);
    }
}

new Game();