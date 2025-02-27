# HANGMAN

## DESCRIPTION
A game where a random word is generated and the user must guess the word letter by letter in order to save the man from death. Every wrong answer results in the man losing a random body part.

## HOW TO PLAY
1. Enter any letter in the English alphabet. It can only be one letter and no special characters or empty spaces
2. Click the 'submit' button or press the 'enter' key
3. Continue to guess by letter by until all the letters are guessed OR all of the man's body parts are lost to time and space
4. Click the 'reset' button or press the "~" key

## TECHNOLOGIES USED
- HTML5
- CSS3
- JavaScript 

## FEATURES
- Random Number Generation
- Input Validation
- Visual Feedback
- Reset Game Functionality

## PROJECT STRUCTURE
Hangman contains three files: 
1. **index.html** - Contains the skeleton of the game
2. **hangman.css** - Contains the styling of the game
3. **hangman.js** - Contains the game logic

## CODE EXAMPLE
```javascript
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