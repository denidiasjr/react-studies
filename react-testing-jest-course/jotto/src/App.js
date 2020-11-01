import React from 'react';
import { connect } from 'react-redux';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import './App.css';

class App extends React.Component {

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

export default connect(mapStateToProps)(App);
