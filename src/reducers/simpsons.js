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
        quote: payload.quote,
        name: payload.character,
        image: payload.image,
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