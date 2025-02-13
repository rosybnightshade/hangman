const words = ["genuine","scheme","affinity","expand","ring","trap","background","innocent","suntan","secretary","solution","hole","attitude","minimum","vegetarian","directory","raw","we","terrify","excavate","harvest","produce","deteriorate","drain","cold","incident","clarify","compound","chop","negotiation","gallery","different","go","tolerate","pattern","consciousness"];

const ids = ['head', 'left-arm', 'right-arm', 'left-leg', 'middle-body', 'right-leg'];

let randomWord = String(words[Math.floor(Math.random() * 50) + 1]);
let attempts = 0;
let streak = 0;
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
            streak+=1;

            //  display
            status.innerHTML = `Correct! Streak: ${streak}`;
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
        userGuess.innerHTML = '';
        attempts ++;
    }

    if (attempts >= 6) {
        status.style.display = "block";
        status.innerHTML = `Game Over, You Did Not Save The Man. Your Word Was ${randomWord}`;
    }

    guess.value = '';
}

function resetGame() {

    // randomWord = String(words[Math.floor(Math.random() * 50) + 1]);
    // attempts = 0;
    // guessed = [];

    // let status = document.getElementById('status');
    
    // guess.value = '';
    // right.value = '';
    // wrong.value = '';
    // status.value = '';

    // right.style.display = 'none';
    // wrong.style.display = 'none';
    // status.style.display = 'none';

    // let body = document.getElementsByClassName('body');

    // body.innerHTML =    
    // `
    //  <div id="head" class="Head">O</div>
    // <div id="torso"><span id="left-arm" class="Left Arm">/</span><span id="middle-body" class="Torso">|</span><span id="right-arm" class="Right Arm">\</span></div>
    // <div id="legs"><span id="left-leg" class="Left Leg">/</span><span class="space"> </span><span id="right-leg" class="Right Leg">\</span></div>
    // `


    location.href = location.href;
}