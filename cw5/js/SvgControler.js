const svgNS = 'http://www.w3.org/2000/svg';

class SvgControler {
    constructor() {
        this.SVG = document.createElementNS(svgNS, 'svg');

        document.body.appendChild(this.SVG);
        window.addEventListener('resize', this.resizeEvent);
        this.event = new CustomEvent('afterResize');

        this.resizeEvent();

        this.PosCenX = 0;
        this.PosCenY = 0;
    }

    set PosCenX(value) { this.posCenX = value; this.SVG.dispatchEvent(this.event); }
    set PosCenY(value) { this.posCenY = value; this.SVG.dispatchEvent(this.event);}

    get PosCenX() { return this.width / 2 + this.posCenX; }
    get PosCenY() { return this.height / 2 + this.posCenY; }

    sizeSVG() {
        this.SVG.setAttribute('width', this.width);
        this.SVG.setAttribute('height', this.height);
    }

    resizeEvent = () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.sizeSVG();

        this.SVG.dispatchEvent(this.event);
    }

    appendChild(child) {
        this.SVG.appendChild(child);
    }

    removeChild(child) {
        this.SVG.removeChild(child);
    }
}

const svgControler = new SvgControler();

export { svgControler };
export { svgNS };