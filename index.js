let player = {
    name: "Player 1",
    chips: 145
}

let cards = [];
let sum = 0;
console.log(sum)
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// querySelector is a method that cn be used to get more thn just the id from html
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13)+1;
    if (randomNum === 1){
        return 11;
    } else if (randomNum >= 11){
        return 10;
    } else {
        return randomNum;
    }
}

function startGame(){
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    renderGame();
}

function renderGame() {
    sum = cards.reduce((first, second) => first + second)
    cardsEl.textContent = `Cards: ${cards}`;
    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You've out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if(hasBlackJack === false && isAlive === true){
        let thirdCard = getRandomCard();
        cards.push(thirdCard);
        renderGame();
    }
}