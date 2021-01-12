

class ControlSensors {
    constructor() {
        window.addEventListener('deviceorientation', this.setSpeed);
        this.speedX = 0;
        this.speedY = 0;
    }

    setSpeed = (e) => {
        this.speedHoryzontal(e.alpha);
        this.speedVertical(e.beta);
    }

    speedHoryzontal(alpha) {
        this.speedX = alpha / 90;

        if (this.speedX > 1) {
            this.speedX = 2 - this.speedX;
        }
        else if (this.speedX < -1) {
            this.speedX = -(2 + this.speedX);
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
}

export { ControlSensors };