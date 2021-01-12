class CanvasControler {
    constructor(inputDir = '#canvas') {
        this.parent = document.querySelector(inputDir);
        this.canvas = document.createElement('canvas');
        this.parent.appendChild(this.canvas);

        window.addEventListener('resize', this.resize);
        this.resize();

        this.SetPosCentX(0);
        this.SetPosCentY(0);
        this.ctx = this.canvas.getContext('2d');
    }

    resize = () => {
        this.canvas.setAttribute('width', window.innerWidth);
        this.canvas.setAttribute('height', window.innerHeight);
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    SetPosCentX(value) { this.x = -value; }
    SetPosCentY(value) { this.y = -value; }

    GetPosCentX() { return this.width / 2 + this.x; }
    GetPosCentY() { return this.height / 2 + this.y; }

    get X() { return this.GetPosCentX(); }
    get Y() { return this.GetPosCentY(); }

    set X(value) { this.SetPosCentX(value); }
    set Y(value) { this.SetPosCentY(value); }

    clear = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}

export { CanvasControler };