const hexSpan = document.getElementById('hex');
const button = document.getElementById('btn');
const body = document.querySelector('body');

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f',]

function displayHex() {
    let hex = '#';

    for (let i = 0; i < 6; i++){
        const index = Math.floor(Math.random()*hexValues.length);
        hex += hexValues[index];
    };

    hexSpan.textContent = hex;
    changeBackground(hex);
}

function changeBackground(color){
    body.style.backgroundColor = color;
}

button.addEventListener('click', displayHex);