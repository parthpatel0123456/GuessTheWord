let numLetters;
let numGivenLetters;
let generatedWord = "";
let gameBox;
let userAttemptedWord = "";
let matchingWord = true;
let dictionary = null;
let goodWord = "";

// numLettersSubmit
//"daily-attempt-puzzle

// start of game - when number of letters choice is submitted
document.getElementById("numLettersSubmit").onclick = async function () {
  numLetters = document.getElementById("numLetters").value;
  numLetters = Number(numLetters);
  console.log(numLetters);

  // number of given letters
  numGivenLetters = document.getElementById("numGivenLetters").value;
  console.log(numGivenLetters);

  // message for user notification
  document.getElementById("usr-msg").textContent = "Word has been generated";

  // Generate random word
  generatedWord = await generateRandomWord(numLetters);
  console.log("top level: " + generatedWord);
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

async function loadWords() {
  const res = await fetch("words_dictionary.json");
  return Object.keys(await res.json());
}
// generates a random word
async function generateRandomWord(length) {
  let word = "";
  dictionary = await loadWords();
  //console.log("dictonaryu: " + dictionary);

  //   for (let i = 0; i < length; i++) {
  //     let randomIndex = Math.floor(Math.random() * dictionary.length);
  //     generatedWord = generatedWord + dictionary[randomIndex];
  //   }
  word = dictionary[Math.floor(Math.random() * dictionary.length)];
  goodWord = word;
  console.log("generated word: " + word);
  return word;
}

// comparision of generated word and user guess
function checkWords(word) {
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
  const inputs = document.querySelectorAll(".inputBox");
  if (word.toUpperCase() === generatedWord.toUpperCase()) {
    for (let i = 0; i < word.length; i++) {
      inputs[i].disabled = true;
      console.log("letter: " + i);
    }
    matchingWord = true;
    console.log("User Attempt: " + userAttemptedWord);
    document.getElementById("gameOutcome").textContent = "Correct Guess - " + word.toUpperCase();
  } else {
    matchingWord = false;
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) === generatedWord.charAt(i)) {
        inputs[i].disabled = true;
        console.log("letter: " + i);

        tempWord += word.charAt(i);
      } else {
        tempWord += word.charAt(i);
      }
    }
    userAttemptedWord = tempWord;
    console.log("User Attempt: " + userAttemptedWord);
    document.getElementById("gameOutcome").textContent = "Incorrect Guess - " + word.toUpperCase();
  }
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

  // for loop for individual input boxes
  for (let i = 0; i < wordLength; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.classList.add("inputBox");

    // individual input boxes
    input.addEventListener("input", (e) => {
      const inputs = document.querySelectorAll(".inputBox");
      let isFull = true;
      inputs.forEach((box) => {
        if (box.value === "") {
          isFull = false;
        }
      });

      // deals with auto moving to next box;
      if (e.target.value.length === 1 && i < wordLength - 1) {
        container.children[i + 1].focus();
        userAttemptedWord += e.target.value;
        console.log(userAttemptedWord);
      } else {
        userAttemptedWord += e.target.value;
        console.log(userAttemptedWord);
      }

      //   if (i === wordLength - 1) {
      //     checkWords(userAttemptedWord);
      //     console.log(i);
      //   }

      // checks against generated word if all input boxes are full
      if (isFull) {
        word = "";
        inputs.forEach((box) => {
          word += box.value;
        });
        checkWords(word);
      }
    });
    container.appendChild(input);
  }
  //word = document.querySelectorAll(".inputBox");

  container.firstChild.focus();
  //checkWords(word);
}
