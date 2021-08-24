const main = document.getElementById('main');
const you = document.getElementById('YOU');

let cardArr = [];
let n = 0;
let card = [];
let randomNumber;
let cardNumber = [];
let speedY = [];
let speedX = [];
let num = 0;
let number = [];
let youPoint = 0;
let aiPoint = 0;

for (let i = 1; i <= 20; i++) {
    speedX[i - 1] = 0;
    speedY[i - 1] = 0;
    cardArr.push(i);
} // 카드 배열

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // 랜덤 함수

for (let i = 0; i < 20; i++) {
    randomNumber = getRandomIntInclusive(0, 19 - n);
    card[i] = `${cardArr[randomNumber]}`;
    cardNumber[i] = parseInt(cardArr[randomNumber]);
    console.log(cardNumber[i]);
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
                if (elem.style.transform != "rotateY(180deg)") {
                    elem.style.transform = "rotateY(180deg)";
                }  // 카드 돌리기 애니메이션
                cardPosition = main.children[i].children[j].children[0];
                main.children[i].children[j].children[0].children[0].src = `../asset/img/${card[(i * 10) + j]}.png`; // 이미지 생성
                cardMove(i, j, num);
                number[num] = cardNumber[(i * 10) + j];
                num++;
                if (num == 2) {
                    compare();
                }
            } // 두 번만
        });
    }
}

function cardMove(i, j, num) {
    setTimeout(function () {
        setInterval(function () {
            if (i == 1) {
                if (speedY[i * 10 + j] >= -180) {
                    main.children[i].children[j].children[0].style.bottom = `${speedY[i * 10 + j]}px`;
                    speedY[i * 10 + j] -= 18;
                }
            }
            else {
                if (speedY[i * 10 + j] >= -350) {
                    main.children[i].children[j].children[0].style.bottom = `${speedY[i * 10 + j]}px`;
                    speedY[i * 10 + j] -= 35;
                }
            }
            if (j <= 3) {
                rightMove(i, j, num);
            }
            else if (j == 4 || j == 5) {
                if (num == 0) {
                    leftMove(i, j, num);
                }
                else {
                    rightMove(i, j, num);
                }
            }
            else {
                leftMove(i, j, num);
            }
        }, 50);
    }, 1000);

}

function compare() {
    if ((number[0] == 5 || number[1] == 5) && (number[0] == 15 || number[1] == 15)) {
        you.innerHTML = "삼팔광땡!";
        point += 28;
    } // 3월 광, 8월 광
    else if ((number[0] == 1 || number[1] == 1) && (number[0] == 15 || number[1] == 15)) {
        you.innerHTML = "일팔광땡!";
        point += 27;
    } // 1월 광, 8월 광
    else if ((number[0] == 1 || number[1] == 1) && (number[0] == 5 || number[1] == 5)) {
        you.innerHTML = "일삼광땡!";
        point += 26;
    } // 1월 광, 3월 광
    else if ((number[0] == 5 || number[1] == 5) && ((number[0] == 13 || number[0] == 14) || (number[1] == 13 || number[1] == 14))) {
        you.innerHTML = "땡잡이!";
    }
    else {
        number[0] = parseInt((number[0] + 1) / 2);
        number[1] = parseInt((number[1] + 1) / 2); // 10이하 값으로 변환
        if (number[0] == number[1]) {
            if (number[0] == 10) {
                you.innerHTML = "장땡!";
            }
            else {
                you.innerHTML = `${number[0]}땡!`;
            }
            youPoint += (15 + number[0]);
        } // 두 수의 값이 같을 때
        else if ((number[0] == 1 || number[1] == 1) && (number[0] == 2 || number[1] == 2)) {
            you.innerHTML = "알리!";
            youPoint += 15;
        } // 1월 , 2월 
        else if ((number[0] == 1 || number[1] == 1) && (number[0] == 4 || number[1] == 4)) {
            you.innerHTML = "독사!";
            youPoint += 14;
        } // 1월 , 4월 
        else if ((number[0] == 1 || number[1] == 1) && (number[0] == 9 || number[1] == 9)) {
            you.innerHTML = "구삥!";
            youPoint += 13;
        } // 1월 , 9월 
        else if ((number[0] == 1 || number[1] == 1) && (number[0] == 10 || number[1] == 10)) {
            you.innerHTML = "장삥!";
            youPoint += 12;
        } // 1월 , 10월 
        else if ((number[0] == 10 || number[1] == 10) && (number[0] == 4 || number[1] == 4)) {
            you.innerHTML = "장사!";
            youPoint += 11;
        } // 10월 , 4월 
        else if ((number[0] == 6 || number[1] == 6) && (number[0] == 4 || number[1] == 4)) {
            you.innerHTML = "세륙!";
            youPoint += 10;
        } // 6월 , 4월 
        else if ((number[0] == 4 || number[1] == 4) && (number[0] == 7 || number[1] == 7)) {
            you.innerHTML = "암행어사!";
        }
        else if ((number[0] == 4 || number[1] == 4) && (number[0] == 9 || number[1] == 9)) {
            you.innerHTML = "구사!";
        }
        else {
            if (number[0] + number[1] >= 10) {
                if ((number[0] + number - 10) == 0) {
                    you.innerHTML = "망통!";
                }
                else {
                    you.innerHTML = `${(number[0] + number[1]) - 10}끗!`;
                }
                youPoint += (number[0] + number[1] - 10);
            } // 두 수의 합이 10보다 클 때
            else {
                you.innerHTML = `${number[0] + number[1]}끗!`;
                youPoint += (number[0] + number[1]);
            } // 두 수의 합이 10보다 작을 때
        } // 끗
    }
} // 비교

function rightMove(a, b, c) {
    if (b != 4 && b != 5) {
        if (speedX[a * 10 + b] <= 480 + (120 * c) - (b * 120)) {
            main.children[a].children[b].children[0].style.right = `${speedX[a * 10 + b]}px`;
            speedX[a * 10 + b] += 48 + (12 * c) - (b * 12);
        }
    }
    else {
        if (speedX[a * 10 + b] <= 120 * -(b - (4 + c))) {
            main.children[a].children[b].children[0].style.right = `${speedX[a * 10 + b]}px`;
            speedX[a * 10 + b] += 12;
        }
    }

}

function leftMove(a, b, c) {
    console.log(a, b, c);
    if (b != 4 && b != 5) {
        if (speedX[a * 10 + b] <= (b - (4 + c)) * 120) {
            main.children[a].children[b].children[0].style.left = `${speedX[a * 10 + b]}px`;
            speedX[a * 10 + b] += (24 - (12 * c)) + ((b - 6) * 12);
        }
    }
    else {
        if (speedX[a * 10 + b] <= 120 * (b - (4 + c))) {
            main.children[a].children[b].children[0].style.left = `${speedX[a * 10 + b]}px`;
            speedX[a * 10 + b] += 12;
        }
    }
}