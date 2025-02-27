const words = ["genuine","scheme","affinity","expand","ring","trap","background","innocent","suntan","secretary","solution","hole","attitude","minimum","vegetarian","directory","raw","we","terrify","excavate","harvest","produce","deteriorate","drain","cold","incident","clarify","compound","chop","negotiation","gallery","different","go","tolerate","pattern","consciousness"];

const ids = ['head', 'left-arm', 'right-arm', 'left-leg', 'middle-body', 'right-leg'];

let randomWord = String(words[Math.floor(Math.random() * words.length) + 1]);
let attempts = 0;
let guessed = [];

let guess = document.getElementById('guess');

guess.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        checkWords();
    }
})

document.addEventListener("keydown", (event) => {
    if (event.key == "~") {
        resetGame();
    }
})

function checkWords() {

    const wrong = document.getElementById('wrong');
    const right = document.getElementById('right');
    let status = document.getElementById('status');
    let userGuess = document.getElementById('guess').value.toLowerCase();

    if (userGuess.length > 1  || userGuess.length < 0) {
        console.error("Invalid Guess");
        status.innerHTML = 'Invalid Guess. Please Try Again';
        status.style.display = 'block';
        status.style.backgroundColor = '#F8FAFC';
        status.style.color = '#23486A';
        status.style.boxShadow = '5px 3px 3px #9AA6B2'
        status.style.border = '2px solid #9AA6B2'
        return;
    }

    if (guessed.includes(userGuess)) {
        console.log("You've already guessed that letter.");
        status.innerHTML = 'Letter Already Guessed';
        status.style.display = 'block';
        status.style.backgroundColor = '#F8FAFC';
        status.style.color = '#23486A';
        status.style.boxShadow = '5px 3px 3px #9AA6B2'
        status.style.border = '2px solid #9AA6B2'
        return;
    }

    guessed.push(userGuess);

    const letters = randomWord.split('');
    let display = '';

    console.log(letters);

    for (let i = 0; i < letters.length; i++) {
        if (guessed.includes(letters[i])) {
            right.style.display = "block";
            display += letters[i];

            //  display
            status.innerHTML = `Correct!`;
            status.style.display = 'block';
            status.style.backgroundColor = '#CBE58B';
            status.style.color = '#34430F';
            status.style.boxShadow = '5px 3px 3px #34430F'
            status.style.border = '#5B741A 2px solid'
        } else {
            display += '_';
        }
    }
    right.innerHTML = display;

    if(letters.includes(userGuess)) {
        if (display === randomWord) {
            status.style.display = "block";
            status.innerHTML = `You Saved The Man!`;
        }
    } else {
        let randInt = Math.floor(Math.random() * ids.length);
        let randomBody = document.getElementById(ids[randInt]);
        ids.splice(randInt, 1);
        randomBody.style.display = "none";
        status.innerHTML = `You Lost His ${randomBody.className}!!!`

        // display
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

    if (attempts >= 6) {
        status.style.display = "block";
        let word = randomWord.toUpperCase();
        status.innerHTML = `Game Over, You Did Not Save The Man. Your Word Was ${word}`;
    }

    guess.value = '';
}

function resetGame() {
    window.location.href = window.location.href;
}