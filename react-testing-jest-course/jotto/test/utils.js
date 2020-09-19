import checkPropTypes from 'check-prop-types';

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