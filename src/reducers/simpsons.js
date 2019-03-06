import { FETCH_QUOTES, FETCH_QUOTES_LOADING } from "../action/simpsons";

const initialState = {
  quotes: [],
  loading: false
}

export default function reducer(state = initialState, { type, payload}) {
  switch(type) {
    case FETCH_QUOTES:
      return { ...state,
      quotes: payload,
      loading: false
    };
    case FETCH_QUOTES_LOADING:
    return { ...state,
      loading: true
      };
    default:
      return state;
  }
}