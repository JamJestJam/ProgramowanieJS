import { Circle } from './Circle.js';
import { svgControler } from './SvgControler.js';

class Ball extends Circle {
    constructor() {
        super();
        this.afterImage = [
            new Circle(4, 0, 0, 'gray', 'black', 1),
            new Circle(5, 0, 0, 'gray', 'black', 1),
            new Circle(6, 0, 0, 'gray', 'black', 1),
            new Circle(7, 0, 0, 'gray', 'black', 1),
            new Circle(8, 0, 0, 'gray', 'black', 1)
        ];
    }

    use() {
        this.afterImage.forEach(element => {
            element.use();
        });
        super.use();
    }

    setPosafterImage() {
        for (let i = 0; i < this.afterImage.length; i++) {
            const element = this.afterImage[i];
            const X = super.X;
            const Y = super.Y;

            setTimeout(() => {
                element.X = X;
                element.Y = Y;
            }, (this.afterImage.length - i + 1) * 45);
        }
    }

    move(speedX, speedY) {
        this.X += speedX;
        this.Y += speedY;

        svgControler.PosCenX = -this.X;
        svgControler.PosCenY = -this.Y;
    }

    set X(value) {
        super.X = value;
        if (this.afterImage != undefined) this.setPosafterImage();
    }
    set Y(value) {
        super.Y = value;
        if (this.afterImage != undefined) this.setPosafterImage();
    }

    get X() { return this.x; }
    get Y() { return this.y; }
}

export { Ball };