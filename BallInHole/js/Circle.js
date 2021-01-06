import { SvgObj } from './SvgObj.js';
import { svgNS } from './SvgControler.js';

class Circle extends SvgObj {
    constructor(r = 10, cx = 0, cy = 0, color = 'gray', stroke = 'black', strokeWidth = 2) {
        super('cx', 'cy');
        this.svg = document.createElementNS(svgNS, 'circle');

        this.X = cx;
        this.Y = cy;
        this.R = r;

        this.svg.setAttribute('r', r);
        this.svg.setAttribute('stroke', stroke);
        this.svg.setAttribute('stroke-width', strokeWidth);
        this.svg.setAttribute('fill', color);
    }

    static DistanceBetweenCircles(a, b) {
        return Math.sqrt((a.X - b.X) ** 2 + (a.Y - b.Y) ** 2);
    }

    ColisionCircle(circle) {
        return (Circle.DistanceBetweenCircles(this, circle) < this.R + circle.R);
    }

    CircleOverlap(circle) {
        return (Circle.DistanceBetweenCircles(this, circle) < ((this.R > circle.R) ? this.R - (circle.R / 2) : circle.R - (this.R / 2)));
    }
}

export { Circle };