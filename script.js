for (let i = 1; i <= 300; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.filter = `hue-rotate(${i * 10}deg)`;
    document.querySelector('.sec').appendChild(box);
}

function animatebox() {
    let boxes = document.querySelectorAll('.box');
    let num = Math.floor(Math.random() * boxes.length);
    boxes[num].classList.toggle('animate');
}

setInterval(animatebox, 1000)