import { Ball } from './Ball.js';
import { Circle } from './Circle.js';
import { Rand } from './Random.js';
import { svgControler, svgNS } from './SvgControler.js';

class Game {
    constructor(holeNr = 10) {
        this.player = new Ball();
        this.player.use();
        this.holeArr = new Array();

        for (let i = 0; i < holeNr; i++) {
            const tmp = new Circle(25, Rand.getRandomIntInclusive(0, svgControler.width), Rand.getRandomIntInclusive(0, svgControler.height), 'black');
            tmp.use();
            this.holeArr.push(tmp);
        }

        this.speedX = 0;
        this.speedY = 0;

        window.addEventListener('deviceorientation', this.setSpeed);
        setInterval(this.update, 10);
    }

    speedHoryzontal(alpha) {
        this.speedX = alpha / 90;

        if (this.speedX > 1) {
            this.speedX = Math.abs(2 - this.speedX);
        }
        else if (this.speedX < -1) {
            this.speedX = -Math.abs(2 + this.speedX);
        }
    }

    speedVertical(beta) {
        this.speedY = (beta - 90) / 90;

        if (this.speedY < -2) {
            this.speedY = -(2 + this.speedY);
        }
        else if (this.speedY < -1) {
            this.speedY = -Math.abs(2 + this.speedY);
        }
    }

    setSpeed = (e) => {
        this.speedHoryzontal(e.alpha);
        this.speedVertical(e.beta);
    }

    update = () => {
        this.player.move(this.speedX, this.speedY);

        for (let i = 0; i < this.holeArr.length; i++) {
            const Ele = this.holeArr[i];
            if (Ele.CircleOverlap(this.player)) {
                alert('Koniec gry');
                this.holeArr.length = 0;
                this.player.move=()=>{};
            }
        }
    }
}

new Game();