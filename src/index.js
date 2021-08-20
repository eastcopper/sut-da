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
    for (let j = 0; j < 10; j++) {
        main.children[i].children[j].addEventListener('click', function () {
            if (num < 2) {
                main.children[i].children[j].children[0].src = " ";
                main.children[i].children[j].children[0].src = `../asset/img/${card[(i * 10) + j]}.png`;
                number[num] = (i * 10) + j;
                console.log(number[num]);
                num++;
                if (num == 2) {
                    compare();
                }
            }
            else {
                compare();
            }
        });
    }
}

function compare() {
    if (number[0] == number[1]) {
        console.log('땡');
    }
    else if (number[0] == 1 || number[1] == 1 && number[0] == 2 || number[1] == 2) {
        console.log('알리');
    }
    else if (number[0] == 1 || number[1] == 1 && number[0] == 4 || number[1] == 4) {
        console.log('독사');
    }
    else if (number[0] == 1 || number[1] == 1 && number[0] == 9 || number[1] == 9) {
        console.log('구삥');
    }
    else if (number[0] == 1 || number[1] == 1 && number[0] == 10 || number[1] == 10) {
        console.log('장삥');
    }
    else if (number[0] == 10 || number[1] == 10 && number[0] == 4 || number[1] == 4) {
        console.log('장사');
    }
    else if (number[0] == 6 || number[1] == 6 && number[0] == 4 || number[1] == 4) {
        console.log('세륙');
    }
}