import React from 'react';
import { useSelector } from 'react-redux';

const Input = () => {
  
  const isSuccess = useSelector(state => state.success);

  return (
    <div data-test="component-input">
        { !isSuccess &&
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

export default Input;