const main = document.getElementById('main');

let card = [];

for (let i = 0; i < 2; i++) {
    for(let j = 0; j < 10; j++) {
        card[i] = [];
        card[i][j] = i + j;
        main.children[i].children[j].addEventListener('click', function() {
            main.children[i].children[j].children[0].src = " ";
            main.children[i].children[j].children[0].src = "../asset/img/1-2.png";
        });
    }
}