const main = document.getElementById('main');
const you = document.getElementById('YOU');

let cardArr = [];
let n = 0;
let card = [];
let randomNumber;
let cardNumber = [];
let num = 0;
let number = [];
let youPoint = 0;
let aiPoint = 0;

for (let i = 1; i <= 20; i++) {
    cardArr.push(i);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // 랜덤 함수

for (let i = 0; i < 20; i++) {
    randomNumber = getRandomIntInclusive(0, 19 - n);
    card[i] = `${cardArr[randomNumber]}`;
    cardNumber[i] = parseInt(cardArr[randomNumber]);
    cardArr.splice(randomNumber, 1);
    n++;
} // card에 숫자 할당

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
        main.children[i].children[j].addEventListener('mouseover', function () {
            main.children[i].children[j].children[1].classList.add("increase");
        }) // 마우스를 올려놨을 때 크기 증가
        main.children[i].children[j].addEventListener('mouseleave', function () {
            main.children[i].children[j].children[1].classList.remove("increase");
        }) // 마우스를 땠을 때 크기 감소
        main.children[i].children[j].addEventListener('click', function (event) { // 카드를 눌렀을 때
            if (num < 2) {
                let elem = event.currentTarget;
                if (elem.style.transform == "rotateY(180deg)") {
                    elem.style.transform = "rotateY(0deg)";
                } else {
                    elem.style.transform = "rotateY(180deg)";
                }
                main.children[i].children[j].children[0].src = " ";
                main.children[i].children[j].children[0].children[0].src = `../asset/img/${card[(i * 10) + j]}.png`; // 이미지 생성
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
    if (number[0] == number[1]) {
        you.innerHTML = `${number[0]}땡!`
        youPoint += (15 + number[0]);
    } // 같은 숫자
    else if (((number[0] == 1 || number[0] == 2) || (number[1] == 1 || number[1] == 2)) && ((number[0] == 3 || number[0] == 4) || (number[1] == 3 || number[1] == 4))) {
        you.innerHTML = "알리!";
        youPoint += 15;
    } // 1, 2
    else if (((number[0] == 1 || number[0] == 2) || (number[1] == 1 || number[1] == 2)) && ((number[0] == 7 || number[0] == 8) || (number[1] == 7 || number[1] == 8))) {
        you.innerHTML = "독사!";
        youPoint += 14;
    } // 1, 4
    else if (((number[0] == 1 || number[0] == 2) || (number[1] == 1 || number[1] == 2)) && ((number[0] == 17 || number[0] == 18) || (number[0] == 17 || number[0] == 18))) {
        you.innerHTML = "구삥!";
        youPoint += 13;
    } // 1, 9
    else if (((number[0] == 1 || number[0] == 2) || (number[1] == 1 || number[1] == 2)) && ((number[0] == 19 || number[0] == 20) || (number[1] == 19 || number[1] == 20))) {
        you.innerHTML = "장삥!";
        youPoint += 12;
    } // 1, 10
    else if (((number[0] == 19 || number[0] == 20) || (number[1] == 19 || number[1] == 20)) && ((number[0] == 7 || number[0] == 8) || (number[1] == 7 || number[1] == 8))) {
        you.innerHTML = "장사!";
        youPoint += 11;
    } // 10, 4
    else if (((number[0] == 11 || number[0] == 12) || (number[1] == 11 || number[1] == 12)) && ((number[0] == 7 || number[0] == 8) || (number[1] == 7 || number[1] == 8))) {
        you.innerHTML = "세륙!";
        youPoint += 10;
    } // 6, 4
    else {
        number[0] = parseInt((number[0] + 1) / 2);
        number[1] = parseInt((number[1] + 1) / 2);
        if (number[0] + number[1] >= 10) {
            you.innerHTML = `${(number[0] + number[1]) - 10}끗!`;
            youPoint += (number[0] + number[1] - 10)
        } // 두 수의 합이 10보다 클 때
        else {
            you.innerHTML = `${number[0] + number[1]}끗!`;
            youPoint += (number[0] + number[1]);
        } // 두 수의 합이 10보다 작을 때
    } // 끗
} // 비교