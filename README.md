# Wordle Testing Project

## Description

This is a simple Node.js project to fetch an API and play the Wordle game.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/thuan2001266/votee_wordle.git
   ```
2. Navigate to the project directory:
   ```sh
   cd wordle
   ```
3. Install dependencies (if any):
   ```sh
   npm install
   ```

## Requirements

- Node.js v22

## Usage

To run the program, you need to enter one of the following commands to the terminal.

### 1. Play the Daily Wordle
Guess the daily Wordle by running:
```sh
node src/wordle.js daily
```

### 2. Play a Random Wordle
Guess a randomly generated Wordle using a seed value:
```sh
node src/wordle.js random <seed>
```
- `<seed>` is a random integer of your choice.

### 3. Guess a Specific Word
Have the program guess a specific 5-letter English word:
```sh
node src/wordle.js word <your_word>
```
- `<your_word>` must be a valid 5-letter English word.