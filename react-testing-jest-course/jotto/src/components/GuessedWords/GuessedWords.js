import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {

  const {
    guessedWords = []
  } = props;

  const guessInstructions = guessedWords.length === 0 && (
    <span data-test="guess-instructions">
      Try to guess the secret word!
    </span>
  );

  const guessedWordsContent = guessedWords.length > 0 && (
    <div data-test="guessed-words">
      <h3>Guessed Words</h3>
      <table>
        <thead>
          <tr>
            <th>Guess</th>
            <th>Matching Letters</th>
          </tr>
        </thead>
        <tbody>
          { 
            guessedWords.map((guess, index) => (
              <tr data-test="guessed-word" key={index}>
                <td>{guess.guessedWord}</td>
                <td>{guess.letterMatchCount}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )

  return (
    <div data-test="component-guessed-words">
      {guessInstructions}
      {guessedWordsContent}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired
}

export default GuessedWords;