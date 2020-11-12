window.addEventListener('deviceorientation', eventMove);
window.addEventListener('load', startUp);
window.addEventListener('resize', OnResize);

const svg = document.querySelector('#svg');
const hole = [];
let xSpeed=0;
let ySpeed=0;

let width;
let height;

setInterval(move, 10);

function move(){
    hole[0];
}

function eventMove(ev) {
    
}

function OnResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
}

function startUp() {
    OnResize();
    setBallStartUp();
}

function setBallStartUp(holeNr = 10) {
    hole.push(new Circle(getRandomPos(10, 10), 10, 'gray'));

    for (let index = 0; index < holeNr; index++) {
        hole.push(new Circle(getRandomPos()));
    }
}

function createCircle(loc, r, stoke, fill, strokeWidth = 1) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    circle.setAttribute('cx', loc.x);
    circle.setAttribute('cy', loc.y);
    circle.setAttribute('r', r);
    circle.setAttribute('stroke', stoke);
    circle.setAttribute('stroke-width', strokeWidth);
    circle.setAttribute('fill', fill);

    svg.appendChild(circle);
    return circle;
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPos(x = 20, y = 20) {
    return new Pos(getRandom(0, width - x), getRandom(0, height - y));
}

class Pos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Circle {
    constructor(pos, r = 25, col = 'black', stroke = 'black') {
        this.pos = pos;
        this.svg = createCircle(pos, r, stroke, col);
    }

    set pos(val){
        console.log(val);
    }
}