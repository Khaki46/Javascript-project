const color = document.querySelector('.color');

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const main = document.querySelector('main');

function random(min, max) {
    return Math.floor(Math.random()*(max-min))+min;
}
function randomColor() {
    return `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
}

btn.addEventListener('click', function () {
    main.style.backgroundColor = randomColor();
    color.innerHTML = randomColor();
});

const colors = ["#9FDD98", "#D788A1", "#CDCCEE", "#7CD3A0", "#C6E3AC"];

btn2.addEventListener('click', function () {
    main.style.backgroundColor = getInColors();
    color.innerHTML = getInColors();

})
function getInColors() {
    return colors[Math.floor(Math.random()*colors.length)];
}

const letter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn3.addEventListener('click', function () {
    main.style.backgroundColor = getColor();
    color.innerHTML = getColor();
})
function getColor() {
    let strColor = "#";
    for (let i = 0; i <= 5; i++) {
        strColor+=letter[random(0,letter.length)];
    }
    return strColor;
}
