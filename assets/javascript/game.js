
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter;
var alreadyGuessed = [];
var winsStart = 0;
var lossesStart = 0;
var guesses = 9;

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


//document.onkeypress = function() {game()};
//function game () {
//    if (guessedLetter === randomLetter);
//        winsStart++;
//            function resetGame() {
//                winsStart = 0;
//                lossesStart = 0;
//                guesses = 9;
//                alreadyGuessed = [];
//            }
//    else (guessedLetter !== randomLetter);
//        guesses--;
//        alreadyGuessed.push(guessedLetter);
//            if (guesses < 1); 
//                resetGame();
//}

//when a key is pressed;
    //if - key matches randomLetter
        //add +1 to winsStart
        //reset game (guesses back to 9, alreadyGuessed cleared, new random letter)
    //else - key does not match randomLetter
        //decrease guesses -1
        //push letter to alreadyGuessed array and make it not selectable again this game
        //continue these 2 steps until guesses = 0 = reset game (lossesStart +1, guesses back to 9, alreadyGuessed cleared, new random letter)