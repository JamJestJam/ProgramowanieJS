const countEle = 6000;
const CanvasCount = 20;
const EleInBit = countEle / CanvasCount;

const canvas = document.querySelector('#Canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const CanvasArr = new Array();

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CreateCanvas(eleList = EleInBit) {
    const canvasIn = document.createElement('canvas');
    canvasIn.width = width;
    canvasIn.height = height;
    const ctxIn = canvasIn.getContext('2d');
    DrawSnow(ctxIn, eleList);

    const img = ctxIn.getImageData(0, 0, width, height);
    return createImageBitmap(img).then((bitmap) => {
        CanvasArr.push({
            image: bitmap,
            x: randomNum(-width,width),
            y: randomNum(-height,height),
            speedX: randomNum(1, 5),
            speedY: randomNum(1, 5),
        });
    });
}

function DrawSnow(ctxIn, eleList) {
    for (let i = 0; i < eleList; i++) {
        ctxIn.beginPath();
        ctxIn.arc(randomNum(15, width - 15), randomNum(15, height - 15), randomNum(1, 15), 0, 2 * Math.PI);
        ctxIn.fillStyle = 'rgba(255, 255, 255, 1)';
        ctxIn.closePath();
        ctxIn.fill();
    }
}

function Animate() {
    ctx.clearRect(0, 0, width, height);
    CanvasArr.forEach(ele => {
        ctx.drawImage(ele.image, ele.x, ele.y);
        ele.x += ele.speedX;
        ele.y += ele.speedY;

        if(ele.x>width)
            ele.x=-width;
        if(ele.y>height)
            ele.y=-height;
    });

    requestAnimationFrame(Animate);
}

(async()=>{
    for (let i = 0; i < CanvasCount; i++) {
        await CreateCanvas();
    }

    Animate();
})();