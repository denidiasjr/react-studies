import { actionTypes } from '../actions';

export const initialState = false;

export const reducer = (state = initialState, action = {}) => {
  
  const { type } = action;
  
  switch (type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }
}

export default reducer;