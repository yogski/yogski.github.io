const suits = ['rock', 'paper', 'scissors'];
const results = ['Draw', 'You Win', 'Opponent Wins'];
var gameState = 0; //option: 0 at beginning, 1 after play.

function resetGame() {
    const resultDisplay = document.getElementById("figure-result");
    const opponentDisplay = document.querySelectorAll(".opponent-area .figure");
    opponentDisplay.forEach(element => {
        element.style.border = "1px solid transparent";
    });
    resultDisplay.style.display = "none";
    gameState = 0;
}

function playGame(playerSuit) {

    //get the result DOM element
    const resultDisplay = document.getElementById("figure-result");
    // start game
    if (gameState == 0) {
        //get opponent's suit
        const randomSuit = Math.floor(Math.random() * suits.length);
        const opponentSuit = suits[randomSuit];
        const opponentDisplay = document.querySelectorAll(".opponent-area .figure");

        //display the element
        opponentDisplay[randomSuit].style.border = "1px solid maroon";
        opponentDisplay[randomSuit].style.borderRadius = "7.5%";
        resultDisplay.innerHTML = results[compareSuits(playerSuit, opponentSuit)];
        resultDisplay.style.display = "block";
        gameState = 1;
    } else {
    // game already commenced. ask to restart.
        resultDisplay.innerHTML = "Restart game first.";
        resultDisplay.style.display = "block";
    }
}

// compare suits. Returns 0 if draw, else return number of winning suit
function compareSuits(suitOne, suitTwo) {
    if (suitOne === suitTwo) {
        return 0;
    }
    if (suitOne == 'rock' && suitTwo == 'scissors') {
        return 1;
    }
    if (suitOne == 'scissors' && suitTwo == 'paper') {
        return 1;
    }
    if (suitOne == 'paper' && suitTwo == 'rock') {
        return 1;
    }
    return 2;
}