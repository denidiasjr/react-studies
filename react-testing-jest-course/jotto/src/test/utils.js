import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import reducer from '../reducers';
import { initialState } from '../reducers/success';

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
  return createStore(reducer, initialState);
}