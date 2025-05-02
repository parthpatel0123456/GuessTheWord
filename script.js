let numLetters;
let numGivenLetters;
let generatedWord;
let gameBox;
// numLettersSubmit
//"daily-attempt-puzzle
document.getElementById("numLettersSubmit").onclick = function () {
  numLetters = document.getElementById("numLetters").value;
  numLetters = Number(numLetters);
  console.log(numLetters);

  numGivenLetters = document.getElementById("numGivenLetters").value;
  console.log(numGivenLetters);

  document.getElementById("usr-msg").textContent = "Word has been generated";

  generatedWord = generateRandomWord(numLetters);
  document.getElementById("generatedWordToGuess").textContent = generatedWord;

  gameBox = userGuess();
  document.getElementById("tempGameBox").textContent = gameBox;

  document.getElementById("gameBoxSubmit").onclick = function () {
    userAttempt = document.getElementById("game-box").value;
    console.log(userAttempt);
    document.getElementById("gameOutcome").textContent = checkWords(userAttempt);
  };
};

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

function checkWords(word) {
  let s = "";
  for (let i = 0; i < generatedWord.length; i++) {
    if (word.charAt(i) === generatedWord.charAt(i)) {
      s += word.charAt(i) + " ";
    } else {
      s += "_ ";
    }
  }
  if (word === generatedWord) {
    return "Correct Guess   " + generatedWord;
  } else {
    return "Incorrect Guess   " + s;
  }
}

function userGuess() {
  let s = "";
  for (let i = 0; i < generatedWord.length - 1; i++) {
    s += "_ ";
  }
  return s + "_";
}
