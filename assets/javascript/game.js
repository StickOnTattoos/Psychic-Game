var userWins = 0;
var userLosses = 0;
var guessChoice = [];
var livesLeft = 10;
var gameOver = false;



var allOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice = allOptions[Math.floor(Math.random() * allOptions.length)];




alert("Welcome To The PSYCHIC GAME");

document.onkeyup = function (event) {
    if (gameOver) {
        livesLeft = 10
        gameOver = false;
        computerChoice = allOptions[Math.floor(Math.random() * allOptions.length)];
        return;
    }
    var userInput = event.key.toLowerCase();
    var winsElement = document.getElementById("wins1");
    var lossesElement = document.getElementById("losses1");
    var livesElement = document.getElementById("livesLeft1");
    var attemptsElement = document.getElementById("attempts1");
    var messageElement = document.getElementById("message1");

    console.log(userInput);
    console.log(computerChoice);




    if (userInput === computerChoice) {
        userWins++;
        gameOver = confirm("Thats the one! Play again?");
        if (gameOver) {
            messageElement.textContent = "Thanks for playing!";
        } else {
            messageElement.textContent = "Guess what letter I am thinking!";
        }
    }

    else {
        livesLeft--;
        messageElement.textContent = "Guess Again!";
    }

    if (livesLeft === 0) {
        gameOver = confirm("no more lives left! game over. would you like to try again?");
        if (gameOver) {
            messageElement.textContent = "Thanks for playing!";
        } else {
            messageElement.textContent = "Guess what letter I am thinking!";
        }
        userLosses++;

    }



    livesElement.textContent = "lives left: " + livesLeft;
    winsElement.textContent = "wins: " + userWins;
    lossesElement.textContent = "Losses: " + userLosses;
    console.log("wins: " + userWins);
    console.log("losses: " + userLosses);
    console.log("lives: " + livesLeft);
    console.log(messageElement);

}



