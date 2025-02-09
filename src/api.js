// Document: https://wordle.votee.dev:8000/redoc
const BASE_URL = "https://wordle.votee.dev:8000";

const wordseg = async (text) => {
    const response = await fetch(`${BASE_URL}/wordseg`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ text })
    });
    return response.json();
}

// Response:
// [
//   {
//   "slot": 0,
//   "guess": "string",
//   "result": "absent"
//   },
//   ...
// ]
const guessDaily = async (guess, size = 5) => {
    const response = await fetch(`${BASE_URL}/daily?guess=${guess}&size=${size}`);
    return response.json();
}

const guessRandom = async (guess, seed = null, size = 5) => {
    let url = `${BASE_URL}/random?guess=${guess}&size=${size}`;
    if (seed !== null) {
        url += `&seed=${seed}`;
    }
    const response = await fetch(url);
    return response.json();
}

const guessWord = async (guess, word) => {
    const response = await fetch(`${BASE_URL}/word/${word}?guess=${guess}`);
    return response.json();
}

export { wordseg, guessDaily, guessRandom, guessWord };
