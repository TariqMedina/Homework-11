function Letter(currentletter) {
    this.currentletter = currentletter;
    this.guessed = false;
    this.printchar = function(){
        if (this.currentletter === " "){
            str = "  ";
            this.guessed = true;
        }
        else if (this.guessed) {
            str = this.currentletter+" ";
        }
        else {
            str = "_ ";
        }
        return(str);
    }
    this.guess = function(guessedletter) {
        if (guessedletter === this.currentletter.toLowerCase()) {
            this.guessed = true;
            this.printchar();
            return true;
        }
        else {
            this.printchar();
        }
    }
}

module.exports = Letter;