window.onload = function () {
	//declaring variables
	var wins = 0;
	var guessesLeft = 13;
	var userGuessTally = [];
	var gameWordList = ["cybernetic", "organism", "computer", "intelligence", "system", "framework"];
	//showing starting values
	document.getElementById('winCounter').innerHTML = wins; 
	document.getElementById('guessesLeft').innerHTML = guessesLeft; 
	//key-press begins the first round
	document.onkeypress = function gameLoop(event) {
		//generate a word to guess and an array of the letters that word comprises
		var gameWord = gameWordList[Math.floor(Math.random() * gameWordList.length)];
		var letters = Array.from(gameWord);

		var para = document.createElement('P');

		document.getElementById('note').innerHTML = "Type Letters on the Kyboard to Guess!";

		for(var i = 0; i < letters.length; i++) {
			var t = document.createTextNode("_");
			para.appendChild(t);
		}
		document.getElementById('currentWord').appendChild(para);

		var letterSpace = document.getElementById('currentWord').textContent;
		var revealedLetters = Array.from(letterSpace);

		console.log(letters);
		console.log(gameWord);
		console.log(wins);
		console.log(guessesLeft);
		console.log(userGuessTally);
		console.log(letterSpace);
		console.log(revealedLetters);

		document.onkeypress = function(event) {
			var userGuess = event.key;

			console.log(userGuess);

			if(gameWord.includes(userGuess)) {
				for(var i = 0; i < letters.length; i++) {
					if(userGuess === letters[i]) {
							revealedLetters.splice(i, 1, userGuess);
					}
				}

				console.log(revealedLetters);
				document.getElementById('currentWord').innerHTML = revealedLetters.join("");

				if(revealedLetters.includes("_")) {

				}
				else {
					document.getElementById('note').innerHTML = "You got it!  Press any key to play again.";
					wins++;
					document.getElementById('winCounter').innerHTML = wins;
					document.onkeypress = function(event) {
						revealedLetters.length = 0;
						document.getElementById('currentWord').innerHTML = "";
						userGuessTally.length = 0;
						document.getElementById('lettersTried').innerHTML = "";
						guessesLeft = 13;
						document.getElementById('guessesLeft').innerHTML = guessesLeft;
						gameLoop();
					}
				}

			} 

			else {
				guessesLeft--;
				document.getElementById('guessesLeft').innerHTML = guessesLeft; 

				if(guessesLeft == 0) {
					document.getElementById('note').innerHTML = "Sorry, Try Again!";
					document.onkeypress = function(event) {
						revealedLetters.length = 0;
						document.getElementById('currentWord').innerHTML = "";
						userGuessTally.length = 0;
						document.getElementById('lettersTried').innerHTML = ""; 
						guessesLeft = 13;
						document.getElementById('guessesLeft').innerHTML = guessesLeft;
						gameLoop();
					}
				} 

				else {
					userGuessTally.push(" " + userGuess);
					document.getElementById('lettersTried').innerHTML = userGuessTally;
				}
			}
		}
	}
}