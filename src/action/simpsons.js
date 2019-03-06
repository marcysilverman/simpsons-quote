import getQuotes from '../services/simpsonsApi';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const FETCH_QUOTES_LOADING = 'FETCH_FACTS_LOADING';

export const fetchQuotes = () => ({
  type: FETCH_QUOTE,
  payload: getQuotes
});

// export const fetchQuotes = dispatch => {
//   dispatch({
//     type: FETCH_QUOTES_LOADING
//   });
//   return getQuotes
//     .then(quote => {
//       dispatch({
//         type: FETCH_QUOTE,
//         payload: quote
//       });
//     });
// };
