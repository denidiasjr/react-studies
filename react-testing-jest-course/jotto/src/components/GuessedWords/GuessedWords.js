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
  )

  return (
    <div data-test="component-guessed-words">
      {guessInstructions}
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