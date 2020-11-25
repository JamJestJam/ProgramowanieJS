import {svgControler} from './SvgControler.js';

class SvgObj {
    constructor(Xatr, Yatr) {
        this.svg = undefined;

        this.xAtr = Xatr;
        this.yAtr = Yatr;

        this.x = 0;
        this.y = 0;

        svgControler.SVG.addEventListener('afterResize', this.set0);
    }

    set0=()=>{
        this.X = this.x;
        this.Y = this.y;
    }

    use(){
        svgControler.appendChild(this.svg);
    }

    set X(value) {
        this.x = value;
        (this.svg != undefined) ?
            this.svg.setAttribute(this.xAtr, this.x + svgControler.PosCenX) : null;
    }

    set Y(value) {
        this.y = value;
        (this.svg != undefined) ?
            this.svg.setAttribute(this.yAtr, this.y + svgControler.PosCenY) : null;
    }

    get X() { return this.x; }
    get Y() { return this.y; }
}

export {SvgObj};