import { actionTypes } from '../actions';

export const initialState = null;

export const reducer = (state = initialState, action = {}) => {
  
  const { type } = action;
  
  switch (type) {
    case (actionTypes.GUESS_WORD):
      return state;
    default:
      return state;
  }
}

export default reducer;