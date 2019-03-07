import reducer from './simpsons';
import { FETCH_QUOTE } from '../action/simpsons';

describe('simpsons reducer', () => {
  it('handles the fetch quote action', () => {
    const state = {
      quote: '',
      image: '',
      loading: false,
    };
    const fetchedState = reducer(state, {
      type: FETCH_QUOTE,
      payload: {
        quote: 'this is a quote',
        image: 'http://image.com',
        loading: false
      }
    });
    expect(fetchedState).toEqual({
      quote: 'this is a quote',
      image: 'http://image.com',
      loading: false
    });
  });
});