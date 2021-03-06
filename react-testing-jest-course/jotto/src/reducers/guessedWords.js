import { actionTypes } from '../actions';

export const initialState = [];

export const reducer = (state = initialState, action = {}) => {
  
  const { type } = action;
  
  switch (type) {
    case (actionTypes.GUESS_WORD):
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default reducer;