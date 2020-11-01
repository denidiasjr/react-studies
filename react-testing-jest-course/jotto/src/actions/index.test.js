import moxios from 'moxios';
import { correctGuess, actionTypes } from './';

describe('getSecretWord action creator', () => {

  beforeEach(() => {
    moxios.install();
  })

  afterEach(() => {
    moxios.uninstall();
  })

  test('adds response word to state', () => {

  });
})