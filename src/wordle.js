import { argv } from "process";
import { guessDaily, guessRandom, guessWord as guessWordFunc } from "./api.js";
import fs from "fs";

// Source: https://www-cs-faculty.stanford.edu/~knuth/sgb-words.txt
const importedWord = fs.readFileSync("./sgb-words.txt", "utf8").split("\n");

const word = [];

const playWordle = async (callback, extra) => {

  // Some best start words
  // "SLATE", "CRANE", "ROAST", "BRICK", "PLUMB", "SATLE"
  let guessWord = "SLATE"

  const filterWordList = (feedback) => {
    const existChars = [];
    const notExistChars = [];
    for (let { slot, guess, result } of feedback) {
        if (result === "correct") {
          word.push({slot, guess});
        }
        if (result === "present") {
          existChars.push(guess);
        };
        if (result === "absent") {
          notExistChars.push(guess);
        };
    }

    words = words.filter(e => {

      if (word.length > 0) {
        for (let {slot, guess} of word) {
          if (e.charAt(slot) != guess) return false;
        }
      }
      
      if (!existChars.every(existChar => e.includes(existChar))) return false;
      if (!notExistChars.every(notExistChar => !e.includes(notExistChar))) return false;      

      return true;
    })
  };

  let words = importedWord;

  for (let i = 0; i < 6; i++) {
    const result = await callback(guessWord, extra);
    filterWordList(result);

    if (words.length == 0) {
      i = 6;
    }
    guessWord = words[0];
    if (words.length == 1) {
      
      console.log(`Found the word after ${i+1} attempt(s): ${guessWord}`);
      i = 6;
    }
  }

  if (words.length == 1) {
    return guessWord;
  } else {
    console.log(`Failed to guess the word :(`)
    return '';
  }
};

const wordleType = argv[2] === 'daily' ? guessDaily : argv[2] === 'random' ? guessRandom : argv[2] === 'word' ? guessWordFunc : '';

if (wordleType === '') throw new Error("Not a valid type!");

else if (argv[2] === 'random' && !argv[3]) throw new Error("Random wordle need an extra param of seed!")

else if (argv[2] === 'word' && !argv[3]) throw new Error("Random wordle need an extra param of word!")

await playWordle(wordleType, argv[3]);

