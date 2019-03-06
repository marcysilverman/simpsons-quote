function getQuotes() {
  return fetch('https://cors-anywhere.herokuapp.com/https://thesimpsonsquoteapi.glitch.me/quotes', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json());
}

export default getQuotes;


