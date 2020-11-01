import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { middlewares } from '../configureStore';

/**
 * Function to find a data-test attribute inside a ShallowWrapper 
 * @param {ShallowWrapper} wrapper 
 * @param {string} value
 * @returns {ShallowWrapper} 
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
}

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(reducer, initialState);
}