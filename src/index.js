const main = document.getElementById('main');

let cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let n = 0;
let card = [];
let randomNumber;
let num = 0;
let number = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 20; i++) {
    randomNumber = getRandomIntInclusive(0, 19 - n); 
    card[i] = `${cardArr[randomNumber]}`;
    cardArr.splice(randomNumber, 1);
    n++;
}

for (let i = 0; i < 2; i++) {
    for(let j = 0; j < 10; j++) {
            main.children[i].children[j].addEventListener('click', function() {
            main.children[i].children[j].children[0].src = " ";
            main.children[i].children[j].children[0].src = `../asset/img/${card[(i * 10) + j]}.png`;
        });
    }
}