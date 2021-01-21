import { Ball } from './Ball.js';
import { Border } from './Border.js';
import { CanvasControler } from './canvasControler.js';
import { ControlSensors } from './control.js';
import { Hole } from './hole.js';
import { Win } from './win.js';

class Game {
    constructor(gameWidth = 500, gameHeight = 500, holeCount = 10, startArea = 50) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.holeCount = holeCount;
        this.startArea = startArea;
        this.canvasControler = new CanvasControler();
        this.control = new ControlSensors();

        this.Start();
    }

    GetRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    CreateCircle(Obj, fromX, toX, fromY, toY, r, action) {
        let x = this.GetRandom(fromX, toX);
        let y = this.GetRandom(fromY, toY);

        if ((x > this.startArea || x < -this.startArea) || (y > this.startArea || y < -this.startArea)) {
            const created = new Obj(this.canvasControler, x, y, r);
            created.OnColision = action;
            this.elements.push(created);
            return true;
        }

        return false;
    }

    CreateBorder() {
        const border = new Border(this.canvasControler, this.gameWidth, this.gameHeight);
        border.OnColision = () => { this.End(false); };
        this.elements.push(border);
    }

    Start() {
        this.startTime = new Date();
        this.time = this.startTime;
        this.elements = [];
        this.ball = new Ball(this.canvasControler, 0, 0, 15, 'black');

        const width = this.gameWidth / 2;
        const height = this.gameHeight / 2;

        this.CreateBorder();
        //create holes
        for (let i = 0; i < this.holeCount; i++)
            if (!this.CreateCircle(Hole, -width, width, -height, height, this.GetRandom(5, 30), () => { this.End(false); }))
                i--;
        while (!this.CreateCircle(Win, -width, width, -height, height, 30, () => { this.End(true); }));

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

        this.ball.Draw();

        this.elements.forEach(element => {
            element.Draw();
        });
    }

    UpdateAll() {
        const ts = this.Tick();
        const speedX = this.control.speedX;
        const speedY = this.control.speedY;

        this.ball.MoveAndCenter(speedX * ts, speedY * ts);

        this.elements.forEach(element => {
            element.TestCol(this.ball.x, this.ball.y);
        });
    }

    Tick() {
        const time = new Date();
        const ts = (time.getTime() - this.time.getTime()) / 10;
        this.time = time;

        return ts;
    }

    End = (win = false) => {
        this.continue = () => { };
        let text = (win) ? 'Wygrałeś.' : 'Skucha.';
        text += '\nChcesz spróbować jeszcze raz?\nczas gry wynosi: ';
        text += (new Date().getTime() - this.startTime.getTime()) / 1000;
        text += ' sekund';
        console.log(text);
        // if (confirm(text)) {
        //     this.Start();
        // }
        this.Start();
    }
}

export { Game };