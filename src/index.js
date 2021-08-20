const main = document.getElementById('main');

let cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let n = 0;
let card = [];
let randomNumber;
let cardNumber = [];
let num = 0;
let number = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // 랜덤 함수

for (let i = 0; i < 20; i++) {
    randomNumber = getRandomIntInclusive(0, 19 - n);
    card[i] = `${cardArr[randomNumber]}`;
    cardNumber[i] = parseInt((cardArr[randomNumber] + 1) / 2);
    cardArr.splice(randomNumber, 1);
    n++;
} // card에 숫자 할당

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
        main.children[i].children[j].addEventListener('click', function () { // 카드를 눌렀을 때
            if (num < 2) {
                main.children[i].children[j].children[0].src = " ";
                main.children[i].children[j].children[0].src = `../asset/img/${card[(i * 10) + j]}.png`; // 이미지 생성
                number[num] = cardNumber[(i * 10) + j];
                num++;
                if (num == 2) {
                    compare();
                }
            } // 두 번만
            else {
                compare();
            }
        });
    }
}

function compare() {
    console.log(number[0]);
    console.log(number[1]);
    if (number[0] == number[1]) {
        console.log('땡');
    } // 같은 숫자
    else if ((number[0] == 1 || number[1] == 1) && (number[0] == 2 || number[1] == 2)) {
        console.log('알리');
    } // 1, 2
    else if ((number[0] == 1 || number[1] == 1) && (number[0] == 4 || number[1] == 4)) {
        console.log('독사');
    } // 1, 4
    else if ((number[0] == 1 || number[1] == 1) && (number[0] == 9 || number[1] == 9)) {
        console.log('구삥');
    } // 1, 9
    else if ((number[0] == 1 || number[1] == 1) && (number[0] == 10 || number[1] == 10)) {
        console.log('장삥');
    } // 1, 10
    else if ((number[0] == 10 || number[1] == 10) && (number[0] == 4 || number[1] == 4)) {
        console.log('장사');
    } // 10, 4
    else if ((number[0] == 6 || number[1] == 6) && (number[0] == 4 || number[1] == 4)) {
        console.log('세륙');
    } // 6, 4
} // 비교