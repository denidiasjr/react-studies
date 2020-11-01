import React from 'react';
import { connect } from 'react-redux';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import { getSecretWord } from './actions';
import './App.css';

export class App extends React.Component {

  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Input />
        <Congrats success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success,
    guessedWords: state.guessedWords
  }
}

const mapActionsToProps = () => {
  return {
    getSecretWord
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
