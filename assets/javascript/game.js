


// give the computer a list of word

var TSsongs = ['Enchanted', 'Afterglow', 'Treacherous'];

//computer randomly chooses a word
var ChosenSong = TSsongs[Math.floor(Math.random() * TSsongs.length)];
//determine length of Songtitle
var TitleLength = ChosenSong.length
console.log("Computer chose: " + ChosenSong, "Song Title Length: " + TitleLength);

var guessesLeft = 10;
var letters = ChosenSong.split('')

console.log(letters)

var TitleLengthText = document.getElementById("titlelength-text");

document.onkeyup = function(event) {

    //  Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);
    var alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
    if(letters.includes(userGuess)){console.log("true");}
    //push the letter to the word underscores   
    else if (alphabet.includes(userGuess)) {guessesLeft--;}
    console.log("guesses left: " + guessesLeft);


}










TitleLengthText.textContent = "Title Length: " + TitleLength;





// user guesses a letter


// if the letter is in the word, put the letter in the right position
// if the letter is not in the word  
//     put the letter in ar4eady guessed section
//     decrease guess count by 1
// if the letter is in already guessed or already in the word, alert letter already guessed


// when all letters in the word are guesed then alert you win
// if countdown gets to 0 alert you lose