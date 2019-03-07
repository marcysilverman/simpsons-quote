import { FETCH_QUOTE, FETCH_QUOTES_LOADING } from "../action/simpsons";

const initialState = {
    quote: '',
    name: '',
    image: '',
    loading: false
}

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTE: {
      return { 
        ...state, 
        quote: payload[0].quote,
        name: payload[0].character,
        image: payload[0].image,
        loading: false
      };
    }
    case FETCH_QUOTES_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
}