import { Ball } from './Ball.js';
import { Border } from './Border.js';
import { CanvasControler } from './canvasControler.js';
import { ControlSensors } from './control.js';

class Game {
    constructor(gameWidth = 3000, gameHeight = 3000) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.canvasControler = new CanvasControler();
        this.control = new ControlSensors();

        this.Start();
    }

    Start() {
        this.time = new Date();
        this.border = new Border(this.canvasControler, this.gameWidth, this.gameHeight);
        this.ball = new Ball(this.canvasControler, 0, 0, 15, 'black');

        this.continue = this.Loop;
        this.Loop();
    }

    Loop = () => {
        this.animation = undefined;

        this.UpdateAll();
        this.DrawAll();

        requestAnimationFrame(this.continue);
    }

    DrawAll() {
        this.canvasControler.clear();
        this.border.Draw();
        this.ball.Draw();
    }


    UpdateAll() {
        const time = new Date();
        const ts = (time.getTime() - this.time.getTime())/10;
        this.time = time;

        this.ball.MoveAndCenter(this.control.speedX * ts, this.control.speedY * ts);
        if (this.border.CollideWithPoint(this.ball.x, this.ball.y))
            this.End();
    }

    End() {
        this.continue = () => { };
        if (confirm('Skucha.\n Chcesz spróbować jeszcze raz?')) {
            this.Start();
        }
    }
}

new Game();