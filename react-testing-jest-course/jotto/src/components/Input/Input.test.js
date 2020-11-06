import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../test/utils';
import ConnectedInput, { Input } from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);

  const wrapper = shallow(
    <ConnectedInput store={store} />
  ).dive().dive();

  return wrapper;
}

setup();

describe('render', () => {

  describe('word has not been guessed', () => {

    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {

    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test('does not renders input box', () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test('does not renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('`guessWord` action creator call', () => {

  const guessedWord = 'train';
  let guessWordMock;
  let wrapper;

  beforeEach(() => {
    guessWordMock = jest.fn();
  
    const props = {
      guessWord: guessWordMock,
      isSuccess: false
    };
  
    wrapper = shallow(<Input {...props} />);
    wrapper.setState({ currentGuess: guessedWord })

    const submitButton = findByTestAttr(wrapper, 'submit-button');
  
    submitButton.simulate('click', { preventDefault() {} });
  });

  test('calls `guessWord` when Submit button is clicked', () => {
    const guessWordCount = guessWordMock.mock.calls.length;
    expect(guessWordCount).toBe(1);
  });
  
  test('calls `guessWord` with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  })
});
