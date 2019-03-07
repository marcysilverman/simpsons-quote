import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

function Quote({ quote, name, image, loading, fetch }) {
  return (
    <>
    {loading ? <h1> Loading </h1> :
    <div>
      <h1> {quote} </h1>
      <h1> {name} </h1>
      <img src={image}/>
      <Loader fetch={fetch} /> 
    </div>}
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Quote;

