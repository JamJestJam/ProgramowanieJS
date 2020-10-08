const images = document.querySelectorAll('.gallery>img');
const lightbox = document.querySelector('.lightbox');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let image;

images.forEach(element => {
    element.addEventListener('click', showLightBox);
});

lightbox.addEventListener('click', hideLightBox);

prev.addEventListener('click', prevLightBox);
next.addEventListener('click', nextLightBox);

function nextLightBox() {
    const img = document.querySelector('.lightbox>img');
    if (image.nextElementSibling != undefined) {
        img.src = image.nextElementSibling.src;
        image = image.nextElementSibling;
    } else {
        img.src = images[0].src;
        image = images[0];
    }
}

function prevLightBox() {
    const img = document.querySelector('.lightbox>img');
    if (image.previousElementSibling != undefined) {
        img.src = image.previousElementSibling.src;
        image = image.previousElementSibling;
    } else {
        img.src = images[images.length - 1].src;
        image = images[images.length - 1];
    }
}

function hideLightBox(event) {
    if (event.target == lightbox) {
        lightbox.classList.remove('lightboxOn');
        lightbox.classList.add('lightboxOFF');
    }
}

function showLightBox(event) {
    const img = document.querySelector('.lightbox>img');
    lightbox.classList.add('lightboxOn');
    lightbox.classList.remove('lightboxOFF');

    img.src = event.target.src;
    image = event.target;
}