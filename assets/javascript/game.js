var wins = 0;
var guessesLeft = 13;
var userGuessTally = [];
var gameWordList = ["cybernetic", "organism", "computer", "intelligence", "system", "framework"];

document.getElementById('winCounter').innerHTML = wins; 
document.getElementById('guessesLeft').innerHTML = guessesLeft;  

document.onkeypress = function(event) {
	var gameWord = gameWordList[Math.floor(Math.random() * gameWordList.length)];

	console.log(gameWord);
	console.log(wins);
	console.log(guessesLeft);
	console.log(userGuessTally);

	document.onkeypress = function(event) {
		var userGuess = event.key;

		if(gameWord.includes(userGuess)) {
			
		} 

		else {
			guessesLeft--;
			document.getElementById('guessesLeft').innerHTML = guessesLeft; 

			if(guessesLeft == 0) {
				losses++;
				guessesLeft = 9;
				userGuessTally.length = 0;
				gameLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; 
			} 

			else {
				userGuessTally.push(" " + userGuess);
			};
		};
	};
}