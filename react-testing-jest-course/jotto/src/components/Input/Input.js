import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {

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
                />
                <button
                  data-test="submit-button"
                  className="btn btn-primary mb-2"
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

export default connect(mapStateToProps)(Input);