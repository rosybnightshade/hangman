const words = ["genuine","scheme","affinity","expand","ring","trap","background","innocent","suntan","secretary","solution","hole","attitude","minimum","vegetarian","directory","raw","we","terrify","excavate","harvest","produce","deteriorate","drain","cold","incident","clarify","compound","chop","negotiation","gallery","different","go","tolerate","pattern","consciousness"];

const ids = ['head', 'left-arm', 'right-arm', 'left-leg', 'middle-body', 'right-leg'];

let randomWord = String(words[Math.floor(Math.random() * 50) + 1]);
let attempts = 0;

function checkWords() {

    const wrong = document.getElementById('wrong');
    const right = document.getElementById('right');
    const status = document.getElementById('status');
    let userGuess = document.getElementById('guess').value.toLowerCase();
    let userInput = document.getElementById('guess');

    const letters = randomWord.split('');
    right.innerHTML += `${letters}`
    letters.style.display = "none";

    console.log(letters);

    if (userGuess.length > 1) {
        console.error("Too Many Letters Entered");
    }

    if(letters.includes(userGuess)) {
        userInput = '';
        if (right.innerHTML.includes(randomWord)) {
            status.innherHTML = `You Saved The Man!`
        }
    } else {
        let randInt = Math.floor(Math.random() * ids.length);
        let randomBody = document.getElementById(ids[randInt]);
        ids.splice(randInt, 1);
        randomBody.style.display = "none";
        wrong.innerHTML += `${userGuess}`;
        userInput = '';
        attempts ++;
    }

    if (attempts > 6) {
        status.innerHTML = "Game Over, You Did Not Save The Man";
    }
}