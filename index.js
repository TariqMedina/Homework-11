// Dependency for inquirer npm package
var inquirer = require("inquirer");
var word = require("./Word")

var count = 0;
words = ["Arrival", "John Wick", "A few good men", "Crazy Stupid Love", "The Avengers", "Inception"];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
words = shuffle(words);

function playGame(currentWord, totalguesses) {

    if (currentWord.count() > 0) {
        if (totalguesses > 0) {
            console.log(totalguesses + " guesses remaining!\n\n")
            inquirer
                .prompt([
                    {
                        name: "letter",
                        message: "Guess a letter: ",
                        validate: function (value) {
                            if (isNaN(value) === true && value.length === 1) {
                                return true;
                            }
                            console.log("\n-- Enter a letter --\n");
                            currentWord.printword();
                            return false;
                        }
                    }
                ])
                .then(function (answer) {
                    currentWord.guessletter(answer.letter.toLowerCase());
                    if (currentWord.check(answer.letter.toLowerCase()) !== true) {
                        console.error('\x1b[36m%s\x1b[0m', "Incorrect!!!\n")
                        totalguesses--;
                    }
                    else {
                        console.log('\x1b[32m%s\x1b[0m', "Correct!!!\n")
                    }

                    playGame(currentWord, totalguesses);
                });
        }
        else {
            console.log("Game over!")
        }
    }
    else {
        if (count<5){
        console.log("You guessed the answer! Next word!\n--------------------------------\n")};
        startRound();
    };
}


var startRound = function () {
    if (count === 0) {
        console.log("Start the Movie Guess Game!\n\n");
        console.log("Round " + (count + 1));
        var currentWord = new word(words[count]);
        currentWord.printword();
        count++;
        playGame(currentWord, 8);

    }
    else if (count < (words.length - 1)) {
        console.log("Round " + (count + 1));

        var currentWord = new word(words[count]);
        currentWord.printword();
        playGame(currentWord, 8);
        count++;
    }
    else {
        console.log("Game over! Thanks for playing.");
    }
}


startRound();