
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter;
var alreadyGuessed = [];
var winsStart = 0;
var lossesStart = 0;
var guesses = 9;
var guessedLetter;

//Wins and losses start at 0
document.getElementById("winStart").innerHTML = winsStart;
document.getElementById("lossStart").innerHTML = lossesStart;

//Guesses start at 9
document.getElementById("guessStart").innerHTML = guesses;

//alreadyGuessed array display
document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed;

//Generate random letter from alphabet to guess
randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

console.log(randomLetter);

function resetGame() {
    guesses = 9;
    document.getElementById("guessStart").innerHTML = guesses;
    alreadyGuessed.length = 0;
    document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed;
    randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log (randomLetter);
}
console.log(resetGame);

document.onkeyup = function game (event) {
    var guessedLetter = event.key;

    console.log (guessedLetter);
        
        if (guessedLetter === randomLetter) {
            winsStart++;
            document.getElementById("winStart").innerHTML = winsStart;
            resetGame();
        }

        else if (guessedLetter !== randomLetter) {
            guesses--;
            document.getElementById("guessStart").innerHTML = guesses;
            alreadyGuessed.push(guessedLetter);
            document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed;
        };
    

                if (guesses < 1) {
                  lossesStart++;
                  document.getElementById("lossStart").innerHTML = lossesStart;  
                  resetGame();
                };
};
