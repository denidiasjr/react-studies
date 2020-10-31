import React from 'react';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import './App.css';

function App() {

  const guessedWords = [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    },
    {
      guessedWord: 'agile',
      letterMatchCount: 1
    },
    {
      guessedWord: 'party',
      letterMatchCount: 5
    },
  ];

  return (
    <div className="container">
      <h1>Jotto</h1>
      {/* <Input /> */}
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
