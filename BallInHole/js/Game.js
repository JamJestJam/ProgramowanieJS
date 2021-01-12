import { Ball } from './Ball.js';
import { Border } from './Border.js';
import { CanvasControler } from './canvasControler.js';

class Game {
    constructor(gameWidth = 500, gameHeight = 500) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.canvasControler = new CanvasControler();
        
        this.Start();
    }

    Start() {
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
        this.ball.MoveAndCenter(1, 0);
        if (this.border.CollideWithPoint(this.ball.x, this.ball.y))
            this.End();
    }

    End() {
        this.continue = ()=>{};
        if(confirm('Skucha.\n Chcesz spróbować jeszcze raz?')){
            this.Start();
        }
    }
}

new Game();