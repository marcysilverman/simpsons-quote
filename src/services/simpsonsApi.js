export const getQuotes = () => {
  console.log('hello');
  return fetch('https://cors-anywhere.herokuapp.com/https://thesimpsonsquoteapi.glitch.me/quotes', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json());
}



