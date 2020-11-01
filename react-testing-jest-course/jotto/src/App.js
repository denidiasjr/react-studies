import React from 'react';
import { useSelector } from 'react-redux';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import './App.css';

function App() {

  const state = useSelector(state => state);

  return (
    <div className="container">
      <h1>Jotto</h1>
      <Input />
      <Congrats success={state.success} />
      <GuessedWords guessedWords={state.guessedWords} />
    </div>
  );
}

export default App;
