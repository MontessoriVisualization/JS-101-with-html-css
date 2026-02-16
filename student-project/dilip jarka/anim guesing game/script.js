// 1. Character List

const characters = [
    "naruto",
    "luffy",
    "goku",
    "ichigo",
    "eren",
    "tanjiro",
    "sasuke",
    "levi",
    "gojo",
    "deku"
];

let originalWord = "";
let displayWord = [];
let hiddenIndexes = [];
let attempts = 3;

// 2. Start Game
function startGame() {

    attempts = 3;
    document.getElementById("attemptCount").textContent = attempts;
    document.getElementById("message").textContent = "";

    // Pick random character
    const randomIndex = Math.floor(Math.random() * characters.length);
    originalWord = characters[randomIndex];
    console.log(originalWord)
    console.log(randomIndex)

    displayWord = originalWord.split("");
    console.log(displayWord)
    hiddenIndexes = [];

    // Hide 2 random letters
    while (hiddenIndexes.length < 2) {
        const index = Math.floor(Math.random() * displayWord.length);
        console.log(index)

        if (!hiddenIndexes.includes(index)) {
            hiddenIndexes.push(index);
            displayWord[index] = "_";
        }
    }

    updateDisplay();
}

// 3. Update Word Display

function updateDisplay() {
    document.getElementById("wordDisplay").textContent = displayWord.join(" ");
}


// 4. Guess Logic

function checkGuess() {

    const inputField = document.getElementById("letterInput");
    const guess = inputField.value.toLowerCase();

    if (guess === "") return;

    let correct = false;

    hiddenIndexes.forEach(index => {
        if (guess === originalWord[index]) {
            displayWord[index] = guess;
            correct = true;
        }
    });

    if (correct) {
        updateDisplay();

        if (!displayWord.includes("_")) {
            document.getElementById("message").textContent = "🎉 You guessed correctly!";
            document.getElementById("guessBtn").disabled = true;
        }

    } else {
        attempts--;
        document.getElementById("attemptCount").textContent = attempts;

        if (attempts === 0) {
            document.getElementById("message").textContent =
                "❌ Game Over! It was " + originalWord;
            displayWord = originalWord.split("");
            updateDisplay();
            document.getElementById("guessBtn").disabled = true;
        }
    }

    inputField.value = "";
}


// 5. Event Listeners

document.getElementById("guessBtn").addEventListener("click", checkGuess);

document.getElementById("restartBtn").addEventListener("click", () => {
    document.getElementById("guessBtn").disabled = false;
    startGame();
});

// Start game when page loads
startGame();