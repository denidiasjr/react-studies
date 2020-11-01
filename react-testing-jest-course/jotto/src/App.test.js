import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from './test/utils';
import ConnectedApp, { App } from './App';


const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<ConnectedApp store={store} />).dive();
  return wrapper;
}

describe('redux properties', () => {

  test('has access to `success` state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(success);
  })

  test('has access to `guessedWords` state', () => {
    const guessedWords = [
      {
        guessedWord: 'train',
        letterMatchCount: 3
      },
      {
        guessedWord: 'agile',
        letterMatchCount: 1
      },
      {
        guessedWord: 'party',
        letterMatchCount: 5
      },
    ]
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.props().guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  })
});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  }

  const wrapper = shallow(<App {...props} />);

  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});