


var TSsongs = ['enchanted', 'afterglow', 'treacherous'];
var ChosenSong = TSsongs[Math.floor(Math.random() * TSsongs.length)];
var TitleLength = ChosenSong.length;
console.log("Computer chose: " + ChosenSong + "\n",
 "Song Title Length: " + TitleLength);

var guessesLeft = 10;
var letters = ChosenSong.split('');
var lettersguessed = [];
var wrongletters = [];
console.log(letters);

var refreshText = document.getElementById("refresh-text")
var TitleLengthText = document.getElementById("titlelength-text");
var ChosenSongText = document.getElementById("chosensong-text");
var wronglettersText = document.getElementById("wrongletters-text");
var guessesLeftText = document.getElementById("guessesleft-text")

for(i=0;i<letters.length; i++){
    var underscores = document.createElement("span");
    underscores.id ="L" +i;
//    if statement
    underscores.textContent = "_ ";
    ChosenSongText.appendChild(underscores);
}

guessesLeftText.textContent = "Guesses Left: " + guessesLeft;

document.onkeyup = function(event) {

    var userGuess = event.key;
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
     userGuess = userGuess.toLowerCase()
    
     if(alphabet.includes(userGuess)){
        console.log("Letter guessed: " + userGuess);
     }
        
    if(lettersguessed.includes(userGuess)){
        alert("You already guessed that letter!");
        console.log("letter already guessed"+ "\n\n............\n\n");
        }

        else if (letters.includes(userGuess)){
        lettersguessed.push(userGuess);
         for(i=0;i<letters.length;i++){
                          if(userGuess == letters[i]){
                            document.getElementById("L"+i).textContent = letters[i] + " "; 
             }
         }
        
                   
        console.log("Letters Guessed: " + lettersguessed +"\n\n............\n\n");
       
    }

    
    else if (alphabet.includes(userGuess)) {
        if(guessesLeft>0){ guessesLeft--;
        lettersguessed.push(userGuess);
        wrongletters.push(userGuess);
        wronglettersText.textContent = "Wrong Letters Guessed: " + wrongletters;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        }
        else {
            alert("You lost!")
            refreshText.textContent = "Refresh the page to try again!";
            }
        console.log("All Letters Guessed: " + lettersguessed);
        console.log("Wrong Letters Guessed: " + wrongletters);
        console.log("Guesses left: " + guessesLeft + "\n\n............\n\n");
    }


}





