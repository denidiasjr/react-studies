import { actionTypes } from '../actions';

export const initialState = null;

export const reducer = (state = initialState, action = {}) => {
  
  const { type } = action;
  
  switch (type) {
    case (actionTypes.SET_SECRET_WORD):
      return action.payload;
    default:
      return state;
  }
}

export default reducer;