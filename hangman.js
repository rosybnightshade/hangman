const words = ["genuine","scheme","affinity","expand","ring","trap","background","innocent","suntan","secretary","solution","hole","attitude","minimum","vegetarian","directory","raw","we","terrify","excavate","harvest","produce","deteriorate","drain","cold","incident","clarify","compound","chop","negotiation","gallery","different","go","tolerate","pattern","consciousness"];

const ids = ['head', 'left-arm', 'right-arm', 'left-leg', 'middle-body', 'right-leg'];

let randomWord = String(words[Math.floor(Math.random() * 50) + 1]);
let attempts = 0;
let guessed = [];

function checkWords() {

    const wrong = document.getElementById('wrong');
    const right = document.getElementById('right');
    const status = document.getElementById('status');
    let userGuess = document.getElementById('guess').value.toLowerCase();

    if (userGuess.length > 1) {
        console.error("Too Many Letters Entered");
        return;
    }

    if (guessed.includes(userGuess)) {
        console.log("You've already guessed that letter.");
        return;
    }

    guessed.push(userGuess);

    const letters = randomWord.split('');
    let display = '';

    console.log(letters);

    for (let i = 0; i < letters.length; i++) {
        if (guessed.includes(letters[i])) {
            display += letters[i];
        } else {
            display += '_';
        }
    }
    right.innerHTML = display;

    if(letters.includes(userGuess)) {
        if (display === randomWord) {
            status.innerHTML = `You Saved The Man!`;
        }
    } else {
        let randInt = Math.floor(Math.random() * ids.length);
        let randomBody = document.getElementById(ids[randInt]);
        ids.splice(randInt, 1);
        randomBody.style.display = "none";
        wrong.innerHTML += `${userGuess}`;
        userGuess.innerHTML = '';
        attempts ++;
    }

    if (attempts >= 6) {
        status.innerHTML = "Game Over, You Did Not Save The Man";
    }

    document.getElementById('guess').value = '';
}
