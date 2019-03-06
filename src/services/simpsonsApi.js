
export const getQuotes = count => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json());
};
