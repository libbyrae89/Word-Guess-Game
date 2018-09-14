
var spells = ["riddikulus", "obliviate", "sectumsempra", "avada kedavra", "alohomora", "lumos", "expelliarmus", "wingardium leviosa", "accio", "expecto patronum"]

var guessesLeft = 10;
var wrongGuess = [];
var guessingWord = "";
var blanks = 0;
var wordLtr = [];
var winNumber = 0;
var lossNumber = 1;
var blanksSuccess = [];

function startGame() {
    wrongGuess = [];
    guessesLeft = 10;
    blanksSuccess = [];

    guessingWord = spells[Math.floor(Math.random() * spells.length)];
    chosenLtr = guessingWord.split("");
    blanks = chosenLtr.length;
    console.log(guessingWord);
    console.log(blanks);

    for (var i = 0; i < blanks; i++) {
            blanksSuccess.push("_");
    }
    console.log(blanksSuccess);

    document.getElementById('word-blank').innerHTML = blanksSuccess.join(" ");
    document.getElementById('guesses-left').innerHTML = guessesLeft;


}

function checkLetters(letter) {
    console.log(letter)
    
    var letterInWord = false;

    for(var i = 0; i < blanks; i++) {
        if(guessingWord[i] === letter) {
            letterInWord = true;
            blanksSuccess[i] = letter;
            
        }
    }

    if(letterInWord === true)  {
        guessesLeft --;
        wrongGuess.push(letter);
    }

}

function finishGame() {

    document.getElementById("word-blank").innerHTML = blanksSuccess.join(" ");
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("wrong-guesses").innerHTML = wrongGuess.join(" ");


    if(chosenLtr.join(" ") === blanksSuccess.join(" ")) {
        winNumber++;
        alert("Brilliant! Your word is " + guessingWord);
        document.getElementById("win-counter").innerHTML = winNumber;
        startGame();
    }
    else if(guessesLeft === 0) {
        document.getElementById("loss-counter").innerHTML = lossNumber ++;
        document.getElementById("wrong-guesses").innerHTML = "";
        alert("Detention with Filch! " + guessingWord + " Try again!");
        startGame();
    }
}

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed)
    finishGame();
}

    document.getElementById("starter").onclick = startGame;
    wrongGuesses = [];
    guessesLeft = 10;
    blanksSuccess = [];



