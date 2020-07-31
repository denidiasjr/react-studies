import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the component
 * @function setup
 * @param {object} props - Component props 
 * @param {object} state - Initial state for the setup 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);

  if (state) {
    wrapper.setState(state);
  }

  return wrapper;
}

/**
 * Function to find a data-test attribute inside a ShallowWrapper 
 * @param {ShallowWrapper} wrapper 
 * @param {string} value
 * @returns {ShallowWrapper} 
 */
const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
}


test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button')
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1);
});

test('not renders error message initially', () => {
  const wrapper = setup();
  const errorMessage = findByTestAttr(wrapper, 'error-message')
  expect(errorMessage.length).toBe(0);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter', () => {
  const counter = 7;
  const wrapper = setup({}, { counter });

  // find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  // check if counter changes
  const counterState = findByTestAttr(wrapper, 'counter-display');
  expect(counterState.text()).toContain(counter + 1);
});

test('clicking button decrements counter', () => {
  const counter = 7;
  const wrapper = setup({}, { counter });

  // find button and click
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  // check if counter changes
  const counterState = findByTestAttr(wrapper, 'counter-display');
  expect(counterState.text()).toContain(counter - 1);
});

test('show error message when user try to decrement at 0', () => {
  const wrapper = setup();

  // find button and click
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  // check if error message shows up
  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.length).toBe(1);
});