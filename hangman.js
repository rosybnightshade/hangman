// word bank
const words = ["genuine","scheme","affinity","expand","ring","trap","background","innocent","suntan","secretary","solution","hole","attitude","minimum","vegetarian","directory","raw","we","terrify","excavate","harvest","produce","deteriorate","drain","cold","incident","clarify","compound","chop","negotiation","gallery","different","go","tolerate","pattern","consciousness"];

// ids for hangman body parts
const ids = ['head', 'left-arm', 'right-arm', 'left-leg', 'middle-body', 'right-leg'];

// global variables
let randomWord = String(words[Math.floor(Math.random() * words.length) + 1]);
let attempts = 0;
let guessed = [];

let guess = document.getElementById('guess');
let submit = document.getElementById('submit');
let reset = document.getElementById('reset');

// Event Listeners to trigger checkWords() [submitting a letter] and resetGame() 
guess.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        checkWords();
    }
})

submit.addEventListener('click', checkWords);

document.addEventListener("keydown", (event) => {
    if (event.key == "~") {
        resetGame();
    }
})

reset.addEventListener('click', resetGame);

// checks each letter submitted
function checkWords() {

    const wrong = document.getElementById('wrong');
    const right = document.getElementById('right');
    let status = document.getElementById('status');
    let userGuess = document.getElementById('guess').value.toLowerCase();

    let validCharacters = "qwertyuiopasdfghjklzxcvbnm";

    // determines if the user has entered a character that is not a special symbol, empty space, and/or multiple letters
    if (userGuess.length > 1  || userGuess.length <= 0 || !validCharacters.includes(userGuess)) {
        console.error("Invalid Guess");

        // displays that the character entered is invalid for user benefit
        status.innerHTML = 'Invalid Guess. Please Try Again';
        status.style.display = 'block';
        status.style.backgroundColor = '#F8FAFC';   

        status.style.color = '#23486A';
        status.style.boxShadow = '5px 3px 3px #9AA6B2'
        status.style.border = '2px solid #9AA6B2'

        return;
    }

    // determines if the user enters a letter that they already guessed
    if (guessed.includes(userGuess)) {
        console.log("You've already guessed that letter.");

        // displays the warning message for user benefit
        status.innerHTML = 'Letter Already Guessed';
        status.style.display = 'block';
        status.style.backgroundColor = '#F8FAFC';
        status.style.color = '#23486A';
        status.style.boxShadow = '5px 3px 3px #9AA6B2'
        status.style.border = '2px solid #9AA6B2'
        return;
    }
    // adds the latest user guess into the array of guessed letters
    guessed.push(userGuess);

    // splits the random word into guessable letters to be displayed individually
    const letters = randomWord.split('');
    let display = '';

    // determines whether the user guess is one of the letters within the randomized word
    for (let i = 0; i < letters.length; i++) {
        if (guessed.includes(letters[i])) {
            right.style.display = "block";
            display += letters[i];

            // displays the correct user guess for user benefit
            status.innerHTML = `Correct!`;
            status.style.display = 'block';
            status.style.backgroundColor = '#CBE58B';
            status.style.color = '#34430F';
            status.style.boxShadow = '5px 3px 3px #34430F'
            status.style.border = '#5B741A 2px solid'
        } else { 
            // displays an empty underscore in place of unguessed letters
            display += '_';
        }
    }
    right.innerHTML = display;

    // determines whether the user has completely guessed the word without any empty spaces
    if(letters.includes(userGuess)) {
        if (display === randomWord) {
            status.style.display = "block";
            status.innerHTML = `You Saved The Man!`;
        }
    } else {

        // randomly deletes a body part from the hangman when the user enters a wrong guess
        document.getElementById("ahhhh").play();
        let randInt = Math.floor(Math.random() * ids.length);
        let randomBody = document.getElementById(ids[randInt]);
        ids.splice(randInt, 1);
        randomBody.style.display = "none";
        status.innerHTML = `You Lost His ${randomBody.className}!!!`

        // display the wrong letters guessed for user benefit
        wrong.style.display = "block";
        wrong.innerHTML += `${userGuess}`;
        status.style.display = 'block';
        status.style.backgroundColor = '#E89E87';
        status.style.color = '#C81927';
        status.style.boxShadow = '5px 3px 3px #7A1600'
        status.style.border = '#64403E 2px solid'
        guess.innerHTML = '';
        attempts ++;

        
    }

    // determines if the hangman has ran out of body parts, signifing the end of the game
    if (attempts >= 6) {
        status.style.display = "block";
        let word = randomWord.toUpperCase();
        status.innerHTML = `Game Over, You Did Not Save The Man. Your Word Was ${word}`;
    }

    guess.value = '';
}

// resets the game by refreshing the page
function resetGame() {
    window.location.href = window.location.href;
}
