import { getQuotes } from '../services/simpsonsApi';

export const FETCH_QUOTES = 'FETCH_QUOTES';
export const FETCH_QUOTES_LOADING = 'FETCH_FACTS_LOADING';

export const fetchQuotes = count => dispatch => {
  dispatch({
    type: FETCH_QUOTES_LOADING
  });
  return getQuotes(count)
    .then(quotes => {
      dispatch({
        type: FETCH_QUOTES,
        payload: quotes
      });
    });
};
