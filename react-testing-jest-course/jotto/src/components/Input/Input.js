import React from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

export class Input extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentGuess: null
    };
  }

  submitGuessedWord = (event) => {
    event.preventDefault();

    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 1){
      this.props.guessWord(this.state.currentGuess);
    }
  }

  render() {
    return (
      <div data-test="component-input">
          { !this.props.isSuccess &&
              <form className="form-inline">
                <input 
                  data-test="input-box"
                  className="mb-2 mx-sm-3"
                  type="text"
                  placeholder="Enter guess" 
                  value={this.state.currentGuess}
                  onChange={(event) => this.setState({ currentGuess: event.target.value })}
                />
                <button
                  data-test="submit-button"
                  className="btn btn-primary mb-2"
                  onClick={this.submitGuessedWord}
                  type="submit"
                >
                  Submit
                </button>
              </form>
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSuccess: state.success
  }
}

const mapActionsToProps = (state) => {
  return {
    guessWord
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Input);