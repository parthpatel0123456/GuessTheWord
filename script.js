let numLetters;
let numGivenLetters;
let generatedWord;
let gameBox;
let userAttemptedWord = "";

// numLettersSubmit
//"daily-attempt-puzzle

// start of game - when number of letters choice is submitted
document.getElementById("numLettersSubmit").onclick = function () {
  numLetters = document.getElementById("numLetters").value;
  numLetters = Number(numLetters);
  console.log(numLetters);

  // number of given letters
  numGivenLetters = document.getElementById("numGivenLetters").value;
  console.log(numGivenLetters);

  // message for user notification
  document.getElementById("usr-msg").textContent = "Word has been generated";

  // Generate random word
  generatedWord = generateRandomWord(numLetters);
  document.getElementById("generatedWordToGuess").textContent = generatedWord.toUpperCase();

  inputBoxes(generatedWord.length);
};

// when user submits a guess
document.getElementById("gameBoxSubmit").onclick = function () {
  //   userAttempt = document.getElementById("innerGameBox").value;
  //   userAttempt = document.querySelectorAll(".inputBox");
  //   console.log(userAttempt);
  //   document.getElementById("gameOutcome").textContent = checkWords(userAttempt);
};

// generates a random word
function generateRandomWord(length) {
  const dictionary = [
    "a",
    "ability",
    "able",
    "about",
    "above",
    "absence",
    "academy",
    "accept",
    "accident",
    "adventure",
    "alien",
    "amazing",
    "analysis",
    "balance",
    "banana",
    "behavior",
    "believe",
    "benefit",
    "black",
    "brilliant",
    "calculator",
    "capture",
    "capital",
    "celebrate",
    "ceremony",
    "champion",
    "change",
    "chapter",
    "cheerful",
    "clever",
    "decision",
    "distant",
    "effort",
    "elegant",
    "evidence",
    "factor",
    "fiction",
    "famous",
    "fantasy",
    "freedom",
    "horizon",
    "honor",
    "hospital",
    "house",
    "imagine",
    "incredible",
    "inspire",
    "journey",
    "judgment",
    "kingdom",
    "laughter",
    "legend",
    "mystery",
    "magnificent",
    "master",
    "magnificent",
    "moral",
    "objective",
    "optimistic",
    "pencil",
    "potential",
    "positive",
    "practical",
    "quickly",
    "question",
    "reality",
    "refresh",
    "reward",
    "remarkable",
    "safety",
    "strategy",
    "sunshine",
    "strength",
    "succeed",
    "teamwork",
    "technology",
    "trouble",
    "universe",
    "unique",
    "vision",
    "welcome",
    "wonderful",
    "xenon",
    "yellow",
    "yesterday",
    "zephyr",
    "zealous",
    "zigzag",
    "acceptance",
    "agility",
    "agenda",
    "alert",
    "alright",
    "amazing",
    "ancient",
    "analyze",
    "balance",
    "beauty",
    "brave",
    "brilliant",
    "calm",
    "climate",
    "champion",
    "classic",
    "climbing",
    "charming",
    "defeat",
    "diligent",
    "dominate",
    "empathy",
    "electro",
    "examine",
    "fairness",
    "focus",
    "generate",
    "harbor",
    "healthy",
    "innovate",
    "inspire",
    "jersey",
    "joke",
    "judge",
    "kitchen",
    "kingdom",
    "laugh",
    "legendary",
    "mastery",
    "mature",
    "neutral",
    "noble",
    "notice",
    "optimism",
    "pattern",
    "perception",
    "potential",
    "quietly",
    "refresh",
    "reproduce",
    "reality",
    "restore",
    "silence",
    "tactile",
    "triumph",
    "unity",
    "vibe",
    "visual",
    "wander",
    "zeal",
    "yoga",
    "zigzag",
  ];

  generatedWord = "";
  //   for (let i = 0; i < length; i++) {
  //     let randomIndex = Math.floor(Math.random() * dictionary.length);
  //     generatedWord = generatedWord + dictionary[randomIndex];
  //   }
  generatedWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  return generatedWord;
}

// comparision of generated word and user guess
function checkWords(word) {
  let s = "";
  //   for (let i = 0; i < generatedWord.length; i++) {
  //     if (word.charAt(i) === generatedWord.charAt(i)) {
  //       s += word.charAt(i) + " ";
  //     } else {
  //       s += "_ ";
  //     }
  //   }
  //   if (word === generatedWord) {
  //     document.getElementById("gameOutcome").textContent = "Correct Guess   " + generatedWord;
  //   } else {
  let tempWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === generatedWord.charAt(i)) {
      tempWord += word.charAt(i);
    } else {
      tempWord += "X";
    }
  }
  userAttemptedWord = tempWord;
  console.log("User Attempt: " + userAttemptedWord);
  document.getElementById("gameOutcome").textContent = "Incorrect Guess   " + s;
  //}
}

// displays the amount of correct words from the gues
function userGuess() {
  let s = "";
  for (let i = 0; i < generatedWord.length - 1; i++) {
    s += "_ ";
  }
  return s + "_";
}

// input boxes for user
function inputBoxes(wordLength) {
  let word = "";
  const container = document.getElementById("innerGameBox");
  container.innerHTML = "";

  for (let i = 0; i < wordLength; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.classList.add("inputBox");

    input.addEventListener("input", (e) => {
      if (e.target.value.length === 1 && i < wordLength - 1) {
        container.children[i + 1].focus();
        userAttemptedWord += e.target.value;
        console.log(userAttemptedWord);
      } else {
        userAttemptedWord += e.target.value;
        console.log(userAttemptedWord);
      }
      checkWords(userAttemptedWord);
      //   if (i === wordLength - 1) {
      //     checkWords(userAttemptedWord);
      //     console.log(i);
      //   }
    });
    container.appendChild(input);
  }
  //word = document.querySelectorAll(".inputBox");

  container.firstChild.focus();
  //checkWords(word);
}
