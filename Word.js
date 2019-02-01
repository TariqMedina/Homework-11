letter = require ("./Letter.js");
option = "John Wick";



function Word(myWord) {
    this.wordarray2 = function(){
        var letters =[];
        for (i=0; i<myWord.length; i++){
            letters[i]= new letter (myWord[i]);
        }
        return letters;
    };
    this.wordarray = this.wordarray2();
    this.printword = function(){
        var str = "";
        for (i=0; i<this.wordarray.length; i++){
            str += this.wordarray[i].printchar(str);
        }
        console.log(str +"\n");
    }
    this.guessletter = function(guess1){
        for (i=0; i<this.wordarray.length; i++){
            this.wordarray[i].guess(guess1);
        }
        this.printword();
    }
    this.count = function(){
        var c=0;
        for (i=0; i<this.wordarray.length; i++){
            if (!this.wordarray[i].guessed){
            c++;}
        }
        return c;
    }
    this.check = function(guess1){
        for (i=0; i<this.wordarray.length; i++){
            if(this.wordarray[i].guess(guess1)){
                return true;
            };
        }
    }
}

module.exports = Word;