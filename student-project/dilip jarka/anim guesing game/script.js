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
  "deku",
];
const wordDisplay = document.getElementById("wordDisplay");
let originalWord = "";
let displayWord = [];
let hiddenIndexes = [];
let attempts = 3;

// 2. Start Game
function startGame() {
  attempts = 3;
  document.getElementById("attemptCount").textContent = attempts;
  document.getElementById("message").textContent = "";

  //random world pick form characters array
  originalWord =
    characters[Math.floor(Math.random() * characters.length)].toLowerCase();
  displayWord = originalWord.split("");

  // Pick 2 random character and store them asobject
  let randomIndex = [];
  while (randomIndex.length < 2) {
    let index = Math.floor(Math.random() * displayWord.length);
    if (!randomIndex.includes(index)) {
      randomIndex.push(index);
    }
  }
  console.log("Random Indexes: ", randomIndex);
  const div = document.createElement("div");
  for (let i = 0; i < displayWord.length; i++) {
    const span = document.createElement("span");
    span.textContent = displayWord[i];
    span.className = "letter";
    displayWord[i] = span;

    div.appendChild(span);
  }

  console.log(displayWord);
  hiddenIndexes = [];

  wordDisplay.innerHTML = "";
  wordDisplay.appendChild(div);

  // replace  2  letters from array randomIndex wtih input field
  let focusSet = false;
  document.querySelectorAll(".letter").forEach((letter, index) => {
    console.log("Checking index: ", index);
    if (randomIndex.includes(index)) {
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.className = "letterInput";
      input.style.width = "20px";
      input.dataset.index = index;
      if (!focusSet) {
        input.focus();
        focusSet = true;
      }
      letter.replaceWith(input);
      hiddenIndexes.push(index);
    }
  });
}

// 3. Update Display Function
function updateDisplay() {
  const div = document.createElement("div");

  for (let i = 0; i < displayWord.length; i++) {
    if (typeof displayWord[i] === "string") {
      const span = document.createElement("span");
      span.textContent = displayWord[i];
      span.className = "letter";
      div.appendChild(span);
    } else {
      div.appendChild(displayWord[i]);
    }
  }

  wordDisplay.innerHTML = "";
  wordDisplay.appendChild(div);
}

// 4. Guess Logic
function checkGuess() {
  const inputs = document.querySelectorAll(".letterInput");

  if (inputs.length === 0) return;

  let allCorrect = true;
  let allFilled = true;

  inputs.forEach((input) => {
    const index = parseInt(input.dataset.index);
    const guess = input.value.toLowerCase();

    if (guess === "") {
      allFilled = false;
    } else if (guess !== originalWord[index]) {
      allCorrect = false;
    }
  });

  if (!allFilled) {
    document.getElementById("message").textContent =
      "⚠️ Please fill all letters!";
    return;
  }

  if (allCorrect) {
    // Replace inputs with correct letters
    inputs.forEach((input) => {
      const index = parseInt(input.dataset.index);
      const span = document.createElement("span");
      span.textContent = originalWord[index];
      span.className = "letter";
      span.style.color = "#4ade80"; // green color for correct answer
      displayWord[index] = span;
      input.replaceWith(span);
    });

    document.getElementById("message").textContent =
      "🎉 You guessed correctly!";
    document.getElementById("guessBtn").disabled = true;
  } else {
    attempts--;
    document.getElementById("attemptCount").textContent = attempts;

    if (attempts === 0) {
      document.getElementById("message").textContent =
        "❌ Game Over! It was " + originalWord;

      // Show correct answer
      inputs.forEach((input) => {
        const index = parseInt(input.dataset.index);
        const span = document.createElement("span");
        span.textContent = originalWord[index];
        span.className = "letter";
        span.style.color = "#ef4444"; // red color for game over
        displayWord[index] = span;
        input.replaceWith(span);
      });

      document.getElementById("guessBtn").disabled = true;
    } else {
      document.getElementById("message").textContent = "❌ Wrong! Try again.";
    }
  }
}

// 5. Event Listeners

document.getElementById("guessBtn").addEventListener("click", checkGuess);

document.getElementById("restartBtn").addEventListener("click", () => {
  document.getElementById("guessBtn").disabled = false;
  startGame();
});
document.getElementById("NextBtn").addEventListener("click", () => {
    document.getElementById("guessBtn").disabled = false;
    updateDisplay()
    startGame();
});
document.getElementById("letterInput").addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        checkGuess()
    }
})


// Start game when page loads
window.addEventListener("load", function () {
  startGame();
});

// Allow Enter key to submit guess from any input field
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && event.target.classList.contains("letterInput")) {
    event.preventDefault();
    checkGuess();
  }
});

// Auto-focus next input when typing
document.addEventListener("input", function (event) {
  if (event.target.classList.contains("letterInput") && event.target.value) {
    const inputs = Array.from(document.querySelectorAll(".letterInput"));
    const currentIndex = inputs.indexOf(event.target);
    if (currentIndex < inputs.length - 1) {
      inputs[currentIndex + 1].focus();
    }
  }
});
