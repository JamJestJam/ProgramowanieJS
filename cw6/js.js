const countEle = 500;

const randomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class canvasCtx {
    constructor() {
        this.canvas = document.getElementById('Canvas');

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        if (!this.canvas.getContext)
            throw new console.error('Brak canvasa');

        this.ele = new Array();
        for (let i = 0; i < countEle; i++) {
            this.ele.push(new Snowflake(
                randomNum(0, this.width),
                randomNum(0, this.height),
                randomNum(1, 15),
                randomNum(-1, 1),
                randomNum(1, 3),
                randomNum(0.3, 2),
                randomNum(0.01, 0.03)));
        }

        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.ele.forEach(element => {
            element.draw(this.ctx);
        });

        this.ele.forEach(element => {
            element.move(this.ctx);
        });

        requestAnimationFrame(() => this.draw());
    }
}

class Snowflake {

    constructor(x, y, r, sin, sppedX, sppedY, sinusTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.sppedX = sppedX;
        this.sppedY = sppedY;
        this.sin = sin;
        this.sinusTime = sinusTime;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.closePath();
        ctx.fill();
    }

    move() {
        this.x += Math.sin(this.sin) * this.sppedX;
        this.y += this.sppedY;
        this.sin += this.sinusTime;

        if (this.y > 670)
            this.y = -this.r;
        if (this.x > 1300)
            this.x = -this.r;
        if (this.x < -this.r - 30 )
            this.x = this.r + 1200;
    }
}

new canvasCtx().draw();