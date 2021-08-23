const main = document.getElementById('main');
const you = document.getElementById('YOU');

let cardArr = [];
let n = 0;
let card = [];
let randomNumber;
let cardNumber = [];
let num = 0;
let number = [];

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
    cardNumber[i] = parseInt((cardArr[randomNumber] + 1) / 2);
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
        console.log('땡');
    } // 같은 숫자
    else if ((number[0] == 1 || number[1] == 1) && (number[0] == 2 || number[1] == 2)) {
        you.innerHTML = "1, 2 알리!";
    } // 1, 2
    else if ((number[0] == 1 || number[1] == 1) && (number[0] == 4 || number[1] == 4)) {
        you.innerHTML = "1, 4 독사!";
    } // 1, 4
    else if ((number[0] == 1 || number[1] == 1) && (number[0] == 9 || number[1] == 9)) {
        you.innerHTML = "1, 9 구삥!";
    } // 1, 9
    else if ((number[0] == 1 || number[1] == 1) && (number[0] == 10 || number[1] == 10)) {
        you.innerHTML = "1, 10 장삥!";
    } // 1, 10
    else if ((number[0] == 10 || number[1] == 10) && (number[0] == 4 || number[1] == 4)) {
        you.innerHTML = "10, 4 장사!";
    } // 10, 4
    else if ((number[0] == 6 || number[1] == 6) && (number[0] == 4 || number[1] == 4)) {
        you.innerHTML = "6, 4 세륙!";
    } // 6, 4
    else {
        if (number[0] + number[1] >= 10) {
            you.innerHTML = `${(number[0] + number[1]) - 10}끗!`;
        } // 두 수의 합이 10보다 클 때
        else {
            you.innerHTML = `${number[0] + number[1]}끗!`;
        } // 두 수의 합이 10보다 작을 때
    } // 끗
} // 비교